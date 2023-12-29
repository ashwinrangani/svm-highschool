import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';


function ClassModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className='rounded-md px-3 py-2 bg-red-600 text-sm font-bold text-gray-200 hover:bg-gray-700'
        onClick={() => setOpenModal(true)}
      >
        Login
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='bg-red-100'>Sections</Modal.Header>
        <Modal.Body>
          <div className='flex flex-row gap-2 justify-center'>
            <Link to="/signup">
              <Button onClick={() => setOpenModal(false)}>Signup</Button>
            </Link>
            <Link to="/login">
              <Button onClick={() => setOpenModal(false)}>Login</Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ClassModal;
