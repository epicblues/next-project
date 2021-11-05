import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserOrRedirect } from "../../api/auth";
import axios from "axios";

import ModalBlackout from "../../../components/recipe/create_recipe/food/ModalBlackout";
// Food(재료)
import FoodForm from "../../../components/recipe/create_recipe/food/FoodForm";
// Step(요리순서)
import StepForm from "../../../components/recipe/create_recipe/step/StepForm";
import { useRouter } from "next/dist/client/router";

//  post_id 초기값 확인을 위한 logic(post 개수 확인)
//  처음에 초기값 받아 놓고, 마지막 submit할 때 post_id 겹치는지 한 번 더 확인 후,
//  겹치면 post_id + 1 해줄 것

//  작성폼 초기값
const initialValues = {};

//  작성폼
export const Index = () => {
  //  Modal Data, 렌더링 로직
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value);
  };
  const router = useRouter();

  const [foodData, setFoodData] = useState([]);
  const [stepData, setStepData] = useState([]);
  const { register, handleSubmit } = useForm();
  const submitBtnClick = async (data) => {
    const date = new Date();

    let finalRecipeData = {
      ...initialValues,
      upload_date: date,
      title: data.title,
      desc: data.desc,
      hit: 0,
      category: data.category,
      qtt: Number(data.qtt),
      duration: data.duration,
      igr_array: foodData.map((food) => {
        return `${food.foodObj.no}/${food.quantity}`;
      }), //  음식(재료) 객체의 배열
      stepData: stepData.map((step) => step.stepDesc),
    };

    const formData = new FormData();
    for (let key in finalRecipeData) {
      formData.append(key, finalRecipeData[key]);
    }
    stepData.forEach((step, index) => {
      formData.append(`step_img_${index + 1}`, step.stepImageFile);
    });
    try {
      await axios.put("/api/recipe/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/recipe");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      {isModalVisible && (
        <ModalBlackout handleSetIsModalVisible={handleSetIsModalVisible} />
      )}
      <h2>레시피 등록하기</h2>
      <h3>레시피 정보 입력</h3>
      <form onSubmit={handleSubmit(submitBtnClick)}>
        <label>요리명</label>
        <input
          type="text"
          placeholder=" ex) 소고기 미역국"
          {...register("title")}
        />
        <br />

        <label>요리소개</label>
        <textarea
          type="text"
          cols="40"
          rows="5"
          placeholder=" 레시피에 대한 설명을 적어주세요.
                    ex) 어머니로부터 배운 미역국 레시피를
                    아내의 입맛에 맞게 고안했습니다."
          {...register("desc")}
        />
        <br />

        <label>카테고리</label>
        <select {...register("category")}>
          <option value="soup">국/탕/찌개</option>
          <option value="grill">구이</option>
          <option value="noodle">면/파스타</option>
          <option value="rice">밥/볶음밥</option>
          <option value="side">반찬</option>
          <option value="kimchi">김치</option>
          <option value="dessert">디저트</option>
          <option value="etc">기타</option>
        </select>
        <br />

        <label>인원</label>
        <select {...register("qtt")}>
          <option value="1">1인분</option>
          <option value="2">2인분</option>
          <option value="3">3인분</option>
          <option value="4">4인분</option>
          <option value="5">5인분 이상</option>
        </select>
        <br />

        <label>시간</label>
        <select {...register("duration")}>
          <option value="1">10분 이내</option>
          <option value="2">10분 ~ 30분</option>
          <option value="3">30분 ~ 1시간</option>
          <option value="4">1시간 ~ 2시간</option>
          <option value="5">2시간 이상</option>
        </select>
        <br />

        <h3>재료</h3>
        <FoodForm
          foodData={foodData}
          setFoodData={setFoodData}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />

        <h3>요리 순서</h3>
        <StepForm stepData={stepData} setStepData={setStepData} />
        <button type="button">임시저장(미구현)</button>
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const user = await getUserOrRedirect(ctx);
  return { props: { user } };
};

export default Index;
