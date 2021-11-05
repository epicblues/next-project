import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../util/mongodb";

const handler: NextApiHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const foods = await (
      await clientPromise
    )
      .db("webfront")
      .collection("food")
      .find({ name: new RegExp(`${name}`) })
      .limit(20)
      .toArray();
    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(404).send("검색 실패");
  }
};

export default handler;
