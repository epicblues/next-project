import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import clientPromise from "../../../../util/mongodb";
import { getUserOrRedirect } from "../../../api/auth";

const index = ({user, recipe}) => {
  console.log(recipe);
  return (
    <div>
      <div>
      <img src={recipe.steps[0].image_url} />
        {/* 상단 레시피 인트로 이미지, 썸네일과 동일 */}
        {/* <img id="rcp_thumb" src={`../${card.rcp_thumb_url}`} /> */}
        {/* 카테고리 중간 사이즈 폰트 */}
        {/* <p id="rcp_category">{card.rcp_category}</p> */}
        {/* 레시피 이름 */}
        {/* <p id="rcp_main_title">{card.rcp_main_title}</p> */}
        {/* 레시피 설명 */}
        {/* <p id="rcp_desc">{card.rcp_desc}</p> */}
        {/* 레시피 재료 */}
        {/* 영양성분표 Modal */}
        {/* <input type="button" value="영양성분보기" /> */}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  // 유저 인증 로직

  const user = await getUserOrRedirect(ctx);

  const recipe = await (
    await clientPromise
  )
    .db("webfront")
    .collection("recipe")
    .aggregate([
      {
        $lookup: {
          from: "food",
          localField: "ingredients.food_id",
          foreignField: "no",
          as: "ingredients_data",
        },
      },
    ])
    .match({
      _id: Number(ctx.query.post_no),
    })
    .toArray();
  // .findOne({ _id: Number(ctx.query.post_no) });
  const newRecipe = JSON.parse(JSON.stringify(recipe[0]));
  newRecipe.ingredients.forEach((ingredient, index) => {
    ingredient.food = newRecipe.ingredients_data[index];
  });
  return { props: { user, recipe: newRecipe } };
};
export default index;
