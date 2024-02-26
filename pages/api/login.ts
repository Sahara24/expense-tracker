import User, { IUser } from "../../Model/User";
import connectDB from "../lib/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg?: string;
  user_details?: IUser;
  error?: string;
};

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectDB();

  const { email, password } = JSON.parse(req.body);

  const person = await User.findOne({ email: email });

  if (person) {
    res.setHeader("Set-Cookie", "user_logged_in=true");
    res.status(200).json({ msg: "Login Successful", user_details: person });
  } else {
    res.status(404).send({ error: "Cannot find user, please sign up" });
  }
}
