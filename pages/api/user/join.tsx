import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import clientPromise, { getNextSequence } from '../../../util/mongodb';
import { hash } from 'bcrypt';





const join: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userForm = req.body;
  const password = await hash(userForm.password, 10);


  try {
    const client = await clientPromise
    const nextSequence = await getNextSequence("user", client);

    const result = await client
      .db("webfront")
      .collection("user")
      .insertOne({ _id: nextSequence, ...userForm, password });
    res.status(200).json(result.insertedId ? { status: "OK" } : { status: "Failed" });

  } catch (err) {
    console.log(err);
    res.status(400).json({ status: JSON.stringify(err) });
  }


}

export default join
