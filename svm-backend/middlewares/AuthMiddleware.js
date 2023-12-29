import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

dotenv.config();

const userVerification = (req, res) => {
  const token = req.cookies.token
  console.log('Received cookies:', req.cookies); // Log received token
  if (!token) {
    console.log("no token received")
    return res.json({ status: false });
    
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username, id: user._id })
          else return res.json({ status: false })
    }
  
  })
}

export default userVerification;
