import jwt from 'jsonwebtoken';
import Student from "../models/studentsData.js";
import User from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();

const DeleteStudent = async (req, res) => {
  try {
    const token = req.headers['authorization']; // Extract token from cookies
    console.log('Token from Headers:', token);

    if (!token) {
      return res.status(403).json({ message: "Unauthorized: Token missing" });
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

      const { id } = req.params;
      console.log(req.params);

      // Check if the user has Admin role and proceed with deletion
      try {
        const existingStudent = await Student.findById(id);
        if (!existingStudent) {
          return res.status(404).json({ message: "Student not found" });
        }

        const deletedStudent = await Student.findByIdAndDelete(id);
        res.status(200).json({ deletedStudent, message: "Student deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Deletion failed', error });
      }
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error', error });
  }
};

export default DeleteStudent;
