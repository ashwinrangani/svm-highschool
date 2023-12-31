import React, { useState, useEffect } from "react";
import axios from "axios";
import EditStudent from "./EditStudent.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StudentsList = ({ selectedStandard, selectedYear }) => {
  const [students, setStudents] = useState([]);
  console.log(selectedYear);
  console.log(selectedStandard);

  useEffect(() => {
    const fetchStudentsByStandard = async () => {
      try {
        const { data } = await axios.get(
          `https://svm-backend.onrender.com/students/${selectedYear}/${selectedStandard}`,
          { withCredentials: true }
        );
        setStudents(data.students);
        console.log(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    if (selectedStandard && selectedYear) {
      fetchStudentsByStandard();
    }
  }, [selectedStandard, selectedYear]);

  
  const deleteStudent = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this student?');

    if (shouldDelete) {
      try {
        const { data } =  await axios.delete(`https://svm-backend.onrender.com/students/delete/${id}`);
        const updatedStudents = students.filter((student) => student._id !== id);
        const { message } = data;

        setStudents(updatedStudents);
        toast.warn(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } catch (error) {
        console.error(error);
        toast.error(`${message}`);
      }
    }
  };
    const generatePDF = () => {
      const doc= new jsPDF();
      doc.text(`    Standard : ${selectedStandard}`, 8, 8);
      doc.autoTable({
      head: [['Student Name', 'Roll Number', 'Birthdate', 'GR', 'Contact', 'Address']],
      body: students.map(student => [student.studentname, student.rollnumber, student.birthdate, student.uid, student.phonenumber, student.address])
      })
      const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  
  window.open(pdfUrl, '_blank');
    }

  return (
    <div className="overflow-x-auto bg-slate-100">
      <div className="flex items-center justify-center gap-3">
      <h2 className="text-2xl font-semibold text-blue-800 text-center mb-4 mt-2">
        Standard - {selectedStandard}
        </h2>
         
         <button onClick={generatePDF}
                type="button" 
                className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm pt-1.5 px-1.5  pb-1.5 pr-2  me-2 mb-2 mt-1">
      Print
    </button>
       </div>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-xs bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Student Name</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Roll Number</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Birthdate</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">GR</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Contact</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Address</th>
            <th className="px-3 py-2 sm:px-6 sm:py-3">Operations</th>
          </tr>
        </thead>
        <tbody className="text-sm bg-slate-100 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {students.map((student) => (
            <tr key={student._id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                {student.studentname}
              </td>
              <td className="px-3 py-2 text-center sm:px-6 sm:py-4 whitespace-nowrap">
                {student.rollnumber}
              </td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">{student.birthdate}</td>
              <td className="px-3 py-2 text-center sm:px-6 sm:py-4">{student.uid}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">{student.phonenumber}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">{student.address}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 gap-1 flex justify-center">
                <EditStudent id={student._id} />

                <button onClick={()=> deleteStudent(student._id)}
                 className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default StudentsList;
