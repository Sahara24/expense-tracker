import User, { IUser } from "../../Model/User"; // Assuming your model is capitalized (User) based on the provided schema
import connectDB from "../lib/connectDB";

export default async function handler(req: any, res: any) {
  await connectDB();

  const data = req.body;

  const { name, mobile, email, password } = JSON.parse(data);
  console.log(JSON.parse(data));

  try {
    // Check if user already exists
    const existingUser: IUser | null = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create a new user instance
    const newUser = new User({
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.setHeader("Set-Cookie", "userLoggedIn=true");
    // Send a success response if user creation is successful
    res.status(200).json({ msg: "Signup successful", user: savedUser });
  } catch (err) {
    // Handle errors
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Error creating user" });
  }
}
