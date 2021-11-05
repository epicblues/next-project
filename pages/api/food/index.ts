import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../util/mongodb";

const handler: NextApiHandler = async (req, res) => {
  res.status(200).json([]);
};

export default handler;
