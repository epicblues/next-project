import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { Dropdown, Button, Header, Form, Container } from "semantic-ui-react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
registerLocale("ko", ko);
const ChallengeWrite = () => {
  const [checkedInputs, setCheckInputs] = useState(false);
  const [checkedInputs2, setCheckInputs2] = useState(false);
  const [checkedInputs3, setCheckInputs3] = useState(false);
  const [checkedInputs4, setCheckInputs4] = useState(false);
  const [checkedInputs5, setCheckInputs5] = useState(false);
  const [dropdown, setDropDown] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [challenges, setChallenges] = useState([
    {
      title: "10000kcal 챌린지",
      startdate: "2021.10.11",
      enddate: "2021.11.05",
      checkedInputs: "diet",
      checkInputs2: "plustkcal",
      checkedInputs3: "1500kcal",
      checkedInputs4: "단백질쉐이크 챙겨먹기",
    },
    {
      title: "100000kcal 챌린지",
      startdate: "2021.10.21",
      enddate: "2021.11.15",
      checkedInputs5: "5회",
      receipekind: "soup",
    },
  ]);

  const changeHandler = (e) => {
    setDropDown(e.target.value);
  };

  const dropdownData = [
    { key: "so", value: "soup", text: "Soup" },
    { key: "no", value: "noodle", text: "Noodle" },
    { key: "de", value: "dessert", text: "Dessert" },
    { key: "ri", value: "rice", text: "Rice" },
    { key: "ki", value: "kimchi", text: "Kimchi" },
    { key: "gr", value: "grill", text: "Grill" },
    { key: "et", value: "etc", text: "Etc" },
  ];

  {
    /*챌린지 명 기능*/
  }
  const resetForm = () => {
    setMessage("");
    setEndDate("");
    setStartDate("");
    setCheckInputs(false);
    setCheckInputs2(false);
    setCheckInputs3(false);
    setCheckInputs4(false);
    setCheckInputs5(false);
    setDropDown("");
  };
  const onClick = (e) => {
    alert(message);
    console.log([message]);
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setChallenges([
      ...challenges,
      {
        title: message,
        startdate: startDate,
        enddate: endDate,
        checkedInputs: checkedInputs,
        checkInputs2: checkedInputs2,
        checkedInputs3: checkedInputs3,
        checkedInputs4: checkedInputs4,
        checkedInputs5: checkedInputs5,
        receipekind: dropdown,
      },
    ]);
    resetForm();
    console.log(challenges);
  };

  return (
    <form
      className="challengeform"
      onSubmit={onSubmit}
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <Container textAlign="center">
        <h1
          style={{
            color: "#6B66FF",
            backgroundColor: "#EAEAEA",
          }}
        >
          챌린지 작성
        </h1>
        <div
          className="challengeName"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        >
          <Header as="h3" inverted color="blue">
            챌린지 이름
          </Header>
          <input
            style={{
              color: "#5CD1E5",
              fontWeight: "bold",
              border: "3px solid",
              width: "200px",
              borderRadius: "5px",
              borderColor: "#6B66FF",
            }}
            type="text"
            name="challengename"
            placeholder="챌린지의 이름을 입력해주세요"
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            onKeyPress={onKeyPress}
          />
          <div>
            <Button type="button" onClick={onClick} color={"twitter"}>
              완료
            </Button>
          </div>
        </div>

        <br />
        <section
          className="challengDate"
          style={{ backgroundColor: "#EAEAEA" }}
        >
          <Header as="h3" inverted color="blue" className="sectionTitle">
            챌린지 기간
          </Header>
          <Header as="h4" inverted color="blue" className="sectionInfo">
            챌린지 진행 기간을 선택해주세요
          </Header>
          <Header as="h4" inverted color="blue" className="challengeDatetitle">
            챌린지 시작일
          </Header>

          <ReactDatePicker
            locale="ko"
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            withPortal
          />

          <Header as="h4" inverted color="blue" className="challengeDateTitle">
            챌린지 종료일
          </Header>

          <ReactDatePicker
            locale="ko"
            dateFormat="yyyy년 MM월 dd일"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            withPortal
          />
        </section>
        <div
          className="challengeCondition"
          style={{ backgroundColor: "#EAEAEA" }}
        >
          <Header as="h3" inverted color="blue" className="challengeContent">
            챌린지 조건
          </Header>
          <div className="challengeKind">
            <Header as="h4" inverted color="blue">
              챌린지의 종류
            </Header>
            <input
              type="radio"
              id="1"
              name="challenge"
              value="diet"
              checked={checkedInputs === "diet"}
              onChange={(e) => {
                setCheckInputs(e.currentTarget.value),
                  console.log([checkedInputs]);
              }}
            />
            <label> diet</label>
            <input
              type="radio"
              id="2"
              name="challenge"
              value="receipe"
              checked={checkedInputs === "receipe"}
              onChange={(e) => {
                setCheckInputs(e.currentTarget.value),
                  console.log([checkedInputs]);
              }}
            />
            <label>receipe</label>
            {checkedInputs === "diet" ? (
              <>
                <Header as="h4" inverted color="blue">
                  다이어트 종류
                </Header>
                <div className="dietKind">
                  <input
                    type="radio"
                    id="3"
                    name="DietKind"
                    value="plusKcal"
                    checked={checkedInputs2 === "plusKcal"}
                    onChange={(e) => {
                      setCheckInputs2(e.currentTarget.value),
                        console.log([checkedInputs2]);
                    }}
                  />
                  <label>살 찌우는 다이어트</label>
                  <input
                    type="radio"
                    id="4"
                    name="DietKind"
                    value="minusKcal"
                    checked={checkedInputs2 === "minusKcal"}
                    onChange={(e) => {
                      setCheckInputs2(e.currentTarget.value),
                        console.log([checkedInputs2]);
                    }}
                  />
                  <label>살 빼는 다이어트</label>
                </div>
              </>
            ) : (
              <>
                <Header as="h4" inverted color="blue">
                  레시피 종류
                </Header>
                <div className="receipeKind">
                  <Dropdown
                    selection
                    options={dropdownData}
                    onChange={(changeHandler, console.log(dropdown))}
                  />
                </div>
              </>
            )}
          </div>
          {checkedInputs === "diet" ? (
            <>
              <Header as="h4" inverted color="blue">
                다이어트 조건 ( 기준: 하루 섭취량)
              </Header>
              <div className="dietCondition1">
                <input
                  type="radio"
                  id="5"
                  name="DietCondition"
                  value="1500kcal"
                  checked={checkedInputs3 === "1500kcal"}
                  onChange={(e) => {
                    setCheckInputs3(e.currentTarget.value),
                      console.log([checkedInputs3]);
                  }}
                />
                <label>1500kcal</label>
                <input
                  type="radio"
                  id="6"
                  name="DietCondition"
                  value="2000kcal"
                  checked={checkedInputs3 === "2000kcal"}
                  onChange={(e) => {
                    setCheckInputs3(e.currentTarget.value),
                      console.log([checkedInputs3]);
                  }}
                />
                <label>2000kcal</label>
                <input
                  type="radio"
                  id="7"
                  name="DietCondition"
                  value="2500kcal"
                  checked={checkedInputs3 === "2500kcal"}
                  onChange={(e) => {
                    setCheckInputs3(e.currentTarget.value),
                      console.log([checkedInputs3]);
                  }}
                />
                <label>2500kcal</label>
                <input
                  type="radio"
                  id="8"
                  name="DietCondition"
                  value="3000kcal"
                  checked={checkedInputs3 === "3000kcal"}
                  onChange={(e) => {
                    setCheckInputs3(e.currentTarget.value),
                      console.log([checkedInputs3]);
                  }}
                />
                <label>3000kcal</label>
              </div>
            </>
          ) : null}

          {checkedInputs === "diet" ? (
            <>
              <Header as="h4" inverted color="blue">
                다이어트 조건 ( 기준 : 하루)
              </Header>
              <div className="dietCondition2">
                <input
                  type="radio"
                  id="9"
                  name="DietCondition2"
                  value="proteinShake"
                  checked={checkedInputs4 === "proteinShake"}
                  onChange={(e) => {
                    setCheckInputs4(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>단백질쉐이크 챙겨먹기</label>
                <input
                  type="radio"
                  id="10"
                  name="DietCondition2"
                  value="everymeal"
                  checked={checkedInputs4 === "everymeal"}
                  onChange={(e) => {
                    setCheckInputs4(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>아침,점심,저녁 다 챙겨먹기</label>
              </div>
            </>
          ) : (
            <>
              <Header as="h4" inverted color="blue">
                레시피 업로드 횟수
              </Header>
              <div className="receipeUploadCount">
                <input
                  type="radio"
                  id="11"
                  name="receipeCount"
                  value="3times"
                  checked={checkedInputs5 === "3times"}
                  onChange={(e) => {
                    setCheckInputs5(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>3회</label>
                <input
                  type="radio"
                  id="12"
                  name="receipeCount"
                  value="5times"
                  checked={checkedInputs5 === "5times"}
                  onChange={(e) => {
                    setCheckInputs5(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>5회</label>
                <input
                  type="radio"
                  id="13"
                  name="receipeCount"
                  value="7times"
                  checked={checkedInputs5 === "7times"}
                  onChange={(e) => {
                    setCheckInputs5(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>7회</label>
                <input
                  type="radio"
                  id="14"
                  name="receipeCount"
                  value="9times"
                  checked={checkedInputs5 === "9times"}
                  onChange={(e) => {
                    setCheckInputs5(e.currentTarget.value),
                      console.log([checkedInputs4]);
                  }}
                />
                <label>9회</label>
              </div>
            </>
          )}
        </div>
        <Button type="submit" color="twitter">
          작성
        </Button>
      </Container>
    </form>
  );
};

export default ChallengeWrite;
