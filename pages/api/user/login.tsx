import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../util/mongodb';
import { verify, sign } from 'jsonwebtoken';
import { hash, compareSync, compare } from 'bcrypt';
import { Document } from 'bson';
import cookie from 'cookie';



// json 형태로 아이디 비밀번호를 받아서 json 형태로 응답(직접적인 Redirect는 불가)
const login: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userForm = req.body;
  const password = req.body.password;
  const secret = process.env.UUID_SECRET as string;

  const result = await (await clientPromise)
    .db("webfront")
    .collection("user")
    .findOne({ email: userForm.email }) as Document

  if (!result) {
    res.status(400).json({ status: "Invalid email" });
  } else {
    const isValidPW = await compare(password, result.password);
    // 로그인 성공 후에 유저 인증 관련 jwt를 쿠키에 저장
    if (isValidPW) {
      const jwt = sign({ email: result.email, name: result.name, id: result._id }, secret, { expiresIn: '1h' });
      // 인증 토큰을 생성하고 쿠키에 저장
      res.setHeader("Set-Cookie", cookie.serialize('auth', jwt, { httpOnly: true, secure: process.env.NODE_ENV !== 'development', sameSite: 'strict', maxAge: 3600, path: '/' }))
    }

    res.status(200).json(isValidPW ? { status: "OK" } : { status: "Failed" });
  }


}

export default login