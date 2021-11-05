// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Document } from "bson";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../util/mongodb";
import { authenticated } from "./auth";

async function handler(req: NextApiRequest, res: NextApiResponse<Document>) {
  const client = await clientPromise;
  const db = client.db("webfront");

  const foodData = await db.collection("food").findOne({});

  if (foodData) {
    delete foodData._id;
    res.status(200).json({ food: foodData });
  } else {
    res.status(404).json({ status: "failed" });
  }
}

export default authenticated(handler);
