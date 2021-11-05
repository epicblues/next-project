//  data RecipeData.js
//  레시피 기본정보 데이터 샘플

let RcpData =
[
    {
        rcp_post_id: 0, //  PK
        user_id: "작성자1",
        rcp_thumb_url: "/static/recipe/imageSample/1thumb.jpg",
        rcp_main_title: "음식1",
        rcp_sub_title: "맛있어요",
        rcp_desc: "닭꼬치 구이를 구워봅시다.",
        rcp_likes: 100,
        rcp_total_review: 10,
        rcp_total_score: 100,
        rcp_total_evaluator: 10,
        rcp_category: "Grill",
        rcp_duration: 1,
        ingredient: "",
    },
    {
        rcp_post_id: 1,
        user_id: "작성자2",
        rcp_thumb_url: "/static/recipe/imageSample/2thumb.jpg",
        rcp_main_title: "음식2",
        rcp_sub_title: "맛있어요",
        rcp_desc: "냉채미역국을 해봅시다.",
        rcp_likes: 200,
        rcp_total_review: 20,
        rcp_total_score: 200,
        rcp_total_evaluator: 20,
        rcp_category: "Soup",
        rcp_duration: 2,
        ingredient: ""
    },
    {
        rcp_post_id: 3,
        user_id: "작성자3",
        rcp_thumb_url: "/static/recipe/imageSample/3thumb.jpg",
        rcp_main_title: "음식3",
        rcp_sub_title: "맛있어요",
        rcp_desc: "불고기 말이를 구워봅시다.",
        rcp_likes: 300,
        rcp_total_review: 30,
        rcp_total_score: 300,
        rcp_total_evaluator: 30,
        rcp_category: "Grill",
        rcp_duration: 3,
        ingredient: ""
    }
]

export default RcpData;