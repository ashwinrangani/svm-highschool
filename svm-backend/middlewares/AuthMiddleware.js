import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

dotenv.config();

const userVerification = (req, res) => {
  const token = req.headers['authorization'];
  console.log('Received cookies:', token); 
  if (!token) {
    console.log("no token received")
    return res.json({ status: false });
    
  }
const jwttoken = token.replace('Bearer', '').trim(); //must remove Bearer prefix before verify

  jwt.verify(jwttoken, process.env.TOKEN_KEY, async (err, data) => {
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
