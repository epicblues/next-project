// data IngredientData.js
// 재료 목록 데이터 샘플
// * 식품영양정보DB에서 JSON 수신한 결과에 따라 변수명 달라질 수 있음
// * 재료의 중량 단위는 그램(g)
// * Primary Key: Igr_no
// * 재료 계량 방법에 대한 TIP Button onClick Modal() 띄울 것
//    - 1T의 무게 10g, 1t의 무게 5g, 1cup의 무게 100ml 등 
//    - 식품영양정보 DB 액체에 대한 단위 확인할 것

let IgrData = 
[
 {
     Igr_no: 1, // PK, FK(NutritionData)
     Igr_name: "pork",
     Igr_qty: 100
 },
 {
     Igr_no: 2,
     Igr_name: "onion",
     Igr_qty: 200
 },
 {
     Igr_no: 3,
     Igr_name: "salt",
     Igr_qty: 5
 }
]
export default IgrData;