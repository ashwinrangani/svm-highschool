import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function AddStudent() {
  const [openModal, setOpenModal] = useState(false);
  const [studentname, setStudentname] = useState('');
  const [standard, setStandard] = useState('');
  const [rollnumber, setRollnumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [uid, setUid] = useState('');
  const [year, setYear] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://svm-highschool-backend.vercel.app/students/addstudent', {
        studentname,
        standard,
        rollnumber,
        birthdate, 
        address,
        phonenumber,
        uid,
        year,
      });
      
      const { message } = response.data;
console.log(message);

      toast.success(message, {
        position: 'bottom-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setTimeout(()=>{
        setStudentname(''),
        setStandard(''),
        setBirthdate(''),
        setRollnumber(''),
        setUid(''),
        setAddress(''),
        setPhonenumber('')
        setYear('')
      },4500)
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.error(error.request);
        toast.error('Request error: Please try again later.');
      } else {
        console.error('Error', error.message);
        toast.error('An unexpected error occurred.');
      }
    }
  };


  
  return (
    <>
      <button
        className="rounded-md px-3 py-2 bg-blue-800 text-sm font-bold text-gray-200 hover:bg-gray-700"
        onClick={() => setOpenModal(true)}
      >
        Add Student
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-red-100">Add Student</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="w-full max-w-lg ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  name="name"
                  type="text"
                  value={studentname}
                  onChange={(e)=>setStudentname(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="standard"
                >
                  Standard
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="standard"
                  name="standard"
                  type="text"
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="rollnumber"
                >
                  Roll Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="rollnumber"
                  name="rollnumber"
                  type="text"
                  value={rollnumber}
                  onChange={(e) => setRollnumber(e.target.value)}

                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="birthdate"
                >
                  Birthdate
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="uid"
                >
                  GR
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="uid"
                  name="uid"
                  type="text"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phonenumber"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phonenumber"
                  name="phonenumber"
                  type="text"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Academic Year
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="year"
                  type="text"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStudent;
