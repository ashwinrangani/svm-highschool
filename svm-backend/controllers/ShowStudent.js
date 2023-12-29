import Student from "../models/studentsData.js";

const ShowStudent = async (req, res) => {
  const { year, standard } = req.params;

  try {
    const students = await Student.find({ year, standard });
    res.status(200).json({ students });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default ShowStudent;
