import React from "react";
import { useState } from "react";
import { getUserOrRedirect } from "../api/auth";
import Link from "next/link";
// Date
import PickDate from "../../components/diary/PickDate";
// meal
import Breakfast from "../../components/diary/meal/Breakfast";
import Lunch from "../../components/diary/meal/Lunch";
import Dinner from "../../components/diary/meal/Dinner";
import Snack from "../../components/diary/meal/Snack";
// Review
import ReviewPage from "../../components/diary/review/ReviewPage";

const index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          key="uniqueId1"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          <a className="item">
            식단<i className="utensils icon" style={{ marginLeft: 4 }}></i>
          </a>
        </li>
      ),
      tabCont: (
        <div style={{border: 'solid 2px lightgray',
                    borderRadius: '5px'}}>
            
            <h2 style={{textAlign: 'left', padding: '16px'}}>
              오늘의 식단
              <i className="utensils icon" style={{marginLeft: 4}}></i>
            </h2>
            

            <div className="container"
                  style={{display: 'grid',
                          gridTemplateColumns: '5fr 5fr',
                          gridGap: '1rem',
                          gridAutoRows:'200px',
                          padding: '0 16px 16px'}}>
            
                <Link href="/diary/add_food">
                  <div className='item'
                        style={{border:'solid 2px lightgray', borderRadius: '5px', }}>
                      <Breakfast />아침
                  </div>
                </Link>

                <Link href="/diary/add_food">
                  <div className='item'
                        style={{border:'solid 2px lightgray', borderRadius: '5px'}}>
                      <Lunch />점심
                  </div>
                </Link>

                <Link href="/diary/add_food">
                  <div className='item'
                        style={{border:'solid 2px lightgray', borderRadius: '5px'}}>
                      <Dinner />저녁
                  </div>
                </Link>

                <Link href="/diary/add_food">
                  <div className='item'
                        style={{border:'solid 2px lightgray', borderRadius: '5px'}}>
                      <Snack />간식
                  </div>
                </Link>

            </div>
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          key="uniqueId2"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          <a className="item">
            일기
            <i className="pencil alternate icon" style={{ marginLeft: 4 }}></i>
          </a>
        </li>
      ),
      tabCont: (
        <div>
          <ReviewPage />
        </div>
      ),
    },
  ];

  return (
    // Wrapper
    <div className="ui center aligned container">
      <div className="DatePart">
        <PickDate></PickDate>
      </div>

      <div className="content">
        <ul
          className="ui secondary pointing menu"
          style={{ listStyle: "none" }}
        >
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </ul>
        <div>{tabContArr[activeIndex].tabCont}</div>
      </div>
    </div>
    // End of Wrapper
  );
};

export const getServerSideProps = async (ctx) => {
  const user = await getUserOrRedirect(ctx);
  console.log("user:", user);
  return { props: { user } };
};

export default index;
