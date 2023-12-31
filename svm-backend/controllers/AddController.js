import jwt from 'jsonwebtoken';
import Student from "../models/studentsData.js";
import User from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();


const AddStudent = async (req, res) => {
  try {
    const token = req.headers['authorization']; // Extract token from cookies
    console.log('Token from Headers:', token);

    if (!token) {
      return res.status(403).json({ message: "Unauthorized Access" });
    }

    try {
      const jwtToken = token.replace('Bearer', '').trim();
      const decodedToken = jwt.verify(jwtToken, process.env.TOKEN_KEY); // Verify and decode the token
      const userId = decodedToken.id; // Extract user's ID from the decoded token
      console.log('User ID:', userId);

      const user = await User.findById(userId); // Find user by their ID
      console.log('Retrieved User:', user);

      if (!user || user.role !== "Admin") {
        return res.status(403).json({ message: "Unauthorized: Insufficient permissions" });
      }

      const { standard, studentname, rollnumber, birthdate, address, phonenumber, uid, year } = req.body;
      const existingStudent = await Student.findOne({ studentname });

      if (existingStudent) {
        return res.status(400).json({ message: "Student already exists" });
      }

      const newStudent = await Student.create({
        standard,
        studentname,
        rollnumber,
        birthdate,
        address,
        phonenumber,
        uid,
        year,
      });

      res.status(201).json({
        message: "Student added successfully",
        success: true,
        student: newStudent,
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(403).json({ message: "Unauthorized: Token invalid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating student", error });
  }
};

export default AddStudent;
