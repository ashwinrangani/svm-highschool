import jwt from 'jsonwebtoken';
import Student from "../models/studentsData.js";
import User from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();

const EditStudent = async (req, res) => {
  try {
    const token = req.cookies.token; // Extract token from cookies
    console.log('Token from Cookie:', token);

    if (!token) {
      return res.status(403).json({ message: "Unauthorized: Token missing" });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY); // Verify and decode the token
      const userId = decodedToken.id; // Extract user's ID from the decoded token
      console.log('User ID:', userId);

      const user = await User.findById(userId); // Find user by their ID
      console.log('Retrieved User:', user);

      if (!user || user.role !== "Admin") {
        return res.status(403).json({ message: "Unauthorized: Insufficient permissions" });
      }

      const { id } = req.params;
      console.log(req.params);

      // Check if the user has Admin role and proceed with editing
      try {
        const existingStudent = await Student.findById(id);
        if (!existingStudent) {
          return res.status(404).json({ message: "Student not found" });
        }

        // Update the student details
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
          new: true, 
          runValidators: true, 
        });

        if (!updatedStudent) {
          return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ updatedStudent, message: 'Changes Applied' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Update failed', error });
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

export default EditStudent;
