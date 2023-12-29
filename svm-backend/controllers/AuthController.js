import User from "../models/userModel.js";



const Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      email,
      password,
      username,
      createdAt,
    });

      res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error signing up user", error });
  }
};

export default Signup;
