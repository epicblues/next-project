import React, { LegacyRef, MutableRefObject, useRef } from 'react'
import { checkValid } from '../api/auth';



const Join = () => {

  const email = useRef() as MutableRefObject<HTMLInputElement>;
  const password = useRef() as MutableRefObject<HTMLInputElement>;
  const name = useRef() as MutableRefObject<HTMLInputElement>;
  const message = useRef() as MutableRefObject<HTMLHeadingElement>;


  const handleClick = async () => {

    if (!checkValid(email.current.value, password.current.value, name.current.value)) {
      message.current.textContent = "전부 입력해야 합니다."
      message.current.style.color = "red";
      email.current.focus();
      return;
    }

    const res = await fetch("/api/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        email: email.current?.value,
        password: password.current?.value,
        name: name.current?.value
      })
    })
    const result = await res.json();
    if (result.status === "OK") location.href = "login"
    else {
      const status = JSON.parse(result.status);
      message.current.innerHTML = status.index === 0 ? "중복되는 이메일입니다" : "잘못 입력하셨습니다"
      email.current.value = '';
      password.current.value = '';
      name.current.value = '';
    }
  }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
      <h1 ref={message}>회원가입</h1>
      <div>
        Name : <input type="text" ref={name} /> <br />
        Email : <input type="email" ref={email} /> <br />
        password : <input type="password" ref={password} /> <br />
        <button onClick={handleClick}>제출</button>
      </div>

    </div>

  )
}

export default Join
