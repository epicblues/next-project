import { NextApiHandler } from 'next';
import cookie from 'cookie';


const logout: NextApiHandler = (req, res) => {

  const toDeleteAuth = cookie.serialize(
    "auth", "delete", {
    maxAge: 0,
    path: '/'
  }
  )
  res.setHeader("Set-Cookie", toDeleteAuth).status(200).json({ "status": "logout" });
}


export default logout;