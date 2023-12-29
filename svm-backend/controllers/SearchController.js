import Student from "../models/studentsData.js";

const SearchStudent = async (request, response) => {
  
  const { query: searchQuery } = request.query; // Get the search query from the reque

  try {
    const results = await Student.find({
      $or: [
        { studentname: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive title search
        { rollnumber: { $regex: searchQuery, $options: 'i' } },
        { address: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive author search
      ],
    });

   response.json(results);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: 'Server Error' });
  }
};




export default SearchStudent;
