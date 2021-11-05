
import { GetServerSidePropsContext, NextPage } from 'next'
import { MutableRefObject, useRef } from 'react'


import styles from '../styles/Home.module.css'


// Api에 인증 기능을 활용하는 샘플
const sample: NextPage<any> = () => {

  const paragraphRef = useRef() as MutableRefObject<HTMLParagraphElement>

  const handleClick = async () => {
    const res = await fetch('/api/sample');
    // Api 요청 시에 401 응답이 오면
    // 로그인을 하는 페이지로 이동시킨다.
    if (res.status === 401) {
      location.href = "/user/login"
      return;
    }
    const data = await res.json(); // res.json() 을 통해 {food : 음식 데이터}라는 객체를 얻는다.

    paragraphRef.current.innerHTML = JSON.stringify(data.food);
  }



  return (
    <div className={styles.container}>
      <p ref={paragraphRef}>버튼을 클릭하세요!</p>
      <button onClick={handleClick}>음식 정보 가져오기</button>
      <button onClick={async () => {
        const res = await fetch('/api/create_recipe');
        const result = await res.json();
        console.log(result);
      }}>레시피 생성기</button>
    </div>
  )
}




export default sample
