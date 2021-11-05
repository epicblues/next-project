import React from "react";
import ChallengeWrite from "../../components/challenge/Write/ChallengeWrite";
import { getUserOrRedirect } from "../api/auth";
const write = () => {
  return <ChallengeWrite></ChallengeWrite>;
};

export const getServerSideProps = async (ctx) => {
  const user = await getUserOrRedirect(ctx);
  return { props: { user } };
};

export default write;
