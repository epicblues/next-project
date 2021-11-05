import React from "react";

const ChallengeList = ({ challenges }) => {
  return (
    <div className="challengeList">
      <div className="challenge-id">{challenges.id}</div>
      <div className="challenge-userid">{challenges.userId}</div>
      <div className="challenge-name">{challenges.challengeName}</div>
      <div className="challenge-kind">{challenges.challengeKind}</div>
      <div className="challenge-content">{challenges.challengeContent}</div>
      <div className="challenge-joinCount">{challenges.joinCount}</div>
      <div className="challenge-points">{challenges.points}</div>
      <div className="challenge-startDate">{challenges.startDate}</div>
      <div className="challenge-endDate">{challenges.endDate}</div>
    </div>
  );
};

export default ChallengeList;
