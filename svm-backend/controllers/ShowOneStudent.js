import Student from '../models/studentsData.js'

const ShowOneStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const getStudent = await Student.findById(id);
        res.status(200).json({ getStudent });
    } catch (error) {
        console.error("Error fetching students:", error)
        res.status(500).json({message: "Internal Server Error"})
    }

  }

export default ShowOneStudent;