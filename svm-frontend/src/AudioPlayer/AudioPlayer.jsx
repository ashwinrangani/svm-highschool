
import {  Modal } from 'flowbite-react';
import { useState } from 'react';


function AudioPlayer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex space-x-6">
      <button className='rounded-md px-3 py-2 text-sm font-bold text-gray-300 hover:bg-gray-700' onClick={() => setOpenModal(true)}>Prayer</button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Prayers</Modal.Header>
        <Modal.Body>
          <div>
            <audio src='https://file-examples.com/storage/fe83b11fb06553bbba686e7/2017/11/file_example_MP3_700KB.mp3' controls></audio>
            <audio src='' controls></audio>
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default AudioPlayer