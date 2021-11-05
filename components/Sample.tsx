import React, { FunctionComponent } from 'react'

const Food: FunctionComponent<any> = ({ food }) => {
  console.log(food);
  return (
    <div>
      식품명 : {food.식품명}
    </div>
  )
}

export default Food
