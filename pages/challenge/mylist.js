import React from "react";
import SmallList from "../../components/challenge/Main/SmallList";
import MyChallenge from "../../components/challenge/Main/MyChallenge";
const mylist = () => {
  return (
    <>
      <div className="SamllList">
        <SmallList> </SmallList>
      </div>
      <div className="myChallenge">
        <MyChallenge></MyChallenge>
      </div>
    </>
  );
};

export default mylist;
