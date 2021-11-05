import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";

// Api 요청에 대한 인증확인 미들웨어
// Api 전용. getServerSideProps와는 상관 없음
export const authenticated =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.auth;
    // Token이 유효한가
    try {
      const decoded = verify(token, process.env.UUID_SECRET as string);
      // 에러가 나지 않으면 유효한 토큰!
      // 서버에서 index로 활용할 유저 이메일을 리퀘스트에 심는다.
      console.log("API 미들웨어 인증 성공");
      req.headers.authorization = JSON.stringify(decoded);

      return await fn(req, res);
    } catch (error) {
      // token이 없거나 유효하지 않은 경우
      // 401 status : 인증되지 않은 회원
      res.status(401).json({ status: "no auth" });
    }
  };

export const checkValid = (...strArray: string[]): boolean => {
  return strArray.filter((str) => str.trim().length === 0).length === 0;
};

// ServerSideProps로 user데이터를 활용할 때
export const getUserOrRedirect = async (
  ctx: GetServerSidePropsContext
): Promise<any> => {
  const jwt = ctx.req.cookies.auth;
  try {
    const user = verify(jwt, process.env.UUID_SECRET as string);
    // 토큰 인증이 성공할 경우 토큰의 user 데이터를 return
    return user;
  } catch (error) {
    // 토큰 인증이 실패할 경우 redirect
    console.log(error);
    ctx.res.writeHead(302, {
      Location: "/user/login",
    });
    ctx.res.end();
    return { status: "auth required" };
  }
};
