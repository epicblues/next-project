import React from 'react'
import AddFoodModal from './AddFoodModal'

const FoodForm = ({ foodData, setFoodData, isModalVisible, setIsModalVisible }) => {
    const onModalBtn = (active) => {
        setIsModalVisible(active)

    }
    const removeFood = (food) => {
        setFoodData(
            foodData.filter((value) => value !== food)
        );
    }
    return (
        <div>
            <div>
                {foodData.length === 0 ? <p>재료를 추가해주세요</p>
                    :   foodData.map((value,index) => {
                        return (
                            <div key={index}>
                                <span>
                                    {value.foodObj.name}
                                    {" "}
                                </span>
                                <span>
                                    (제조사: {value.foodObj.mfr})
                                    {" "}
                                </span>
                                <span>
                                    {value.quantity}
                                </span>
                                <span>
                                    {value.foodObj.unit}
                                </span>
                                <button 
                                    type='button'
                                    onClick={() => removeFood(value)}
                                >
                                    삭제
                                </button>
                            </div>
                        );
                    })
                }
            </div>
            <button type='button' onClick={() => onModalBtn(true)}>
                재료추가하기
            </button>
            <div>
                {isModalVisible &&
                (
                    <AddFoodModal
                        foodData={foodData}
                        setFoodData={setFoodData}
                        setIsModalVisible={setIsModalVisible}
                    />
                )}
            </div>
        </div>
    )
}

export default FoodForm
