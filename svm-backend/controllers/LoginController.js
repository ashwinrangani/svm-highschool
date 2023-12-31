import User from "../models/userModel.js";
import createSecretToken from "../utils/SecretToken.js";
import bcrypt from "bcrypt";


const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: 'Incorrect password or email' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({ message: 'Incorrect password or email' });
    }

    const token = createSecretToken(user._id);
    res.status(201).json({ 
      message: "User logged in successfully", 
      success: true, 
      role: user.role,
      id: user._id,
      token: token // Include the token in the response
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in user", error });
  }
};

export default Login;
