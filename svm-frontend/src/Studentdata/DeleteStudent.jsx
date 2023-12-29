import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from "axios";

const  DeleteStudent = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  
  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:4000/students/delete/${id}`);
      // Filter out the deleted student from the students array
      const updatedStudents = students.filter((student) => student._id !== id);
      // Update the state to re-render the UI without the deleted student
      setStudents(updatedStudents);
      
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => { deleteStudent(); setOpenModal(false); }}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteStudent;

