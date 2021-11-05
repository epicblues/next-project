// page component '/recipe/list'
// 모든 레시피를 보여주는 리스트

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShowCategories from "../../../components/recipe/main/Categories";
import { getUserOrRedirect } from "../../api/auth";
import clientPromise from "../../../util/mongodb";

//  CSS
import recipeListStyles from "../../../styles/RecipeList.module.css";

const Index = ({ user, recipes }) => {
  //  레시피 전체 리스트 데이터 받아오기
  const [userData, setUserData] = useState(user);
  const [recipeData, setRecipeData] = useState(recipes);

  return (
    <div>
      <ShowCategories></ShowCategories>
      <h1>레시피 : 전체</h1>
      <div>
        <ul className={recipeListStyles.cards}>
          {recipeData.map((card, index) => {
            return (
              <li key={card._id}>
                <Link
                  href={{
                    pathname: `/recipe/card/${card._id}`,
                    query: { props: { card } },
                  }}
                  as={`/recipe/card/${card._id}`}
                >
                  <a>
                    <Image
                      src={card.steps.slice(-1)[0].image_url}
                      width={100}
                      height={100}
                      alt={card.steps.slice(-1)[0].image_url}
                    />
                    <p>{card.title}</p>
                    <p>작성자: {card.user_id}</p>
                    <p>조회수: {card.hit}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  // 유저 인증 로직
  const user = await getUserOrRedirect(ctx);
  const data = await (await clientPromise)
    .db("webfront")
    .collection("recipe")
    .find({ user_id: user.id })
    .limit(9)
    .toArray();
  const recipes = JSON.parse(JSON.stringify(data));

  return { props: { user, recipes } };
};

export default Index;
