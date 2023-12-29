import React from "react";
import { motion } from 'framer-motion';


const WelcomeScreen = () => {
  return (
    <div className="relative h-screen flex items-center w-screen font-roboto ">
     
      <div className="relative mt-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
      <div className="w-60 mx-auto pb-0"><img src='./kys-logo.jpg' className="h-60 w-60 pb-0"/></div>
        <motion.h1 
          initial={{x:100, fontSize:"20px"}}
          animate={{ x: 0, fontSize:"36px" }}
          transition={{ ease: "easeOut", duration: 2 }} 
          className="text-4xl font-bold text-red-600">Kutch Yuvak Sangh
        </motion.h1>
        <p className="text-xl mt-2 text-red-600 mb-2">Organised</p>
        <motion.h1 
          initial={{x:-100, fontSize:"20px"}}
          animate={{ x: 0, fontSize:"36px" }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-4xl font-bold text-red-600">
          Saraswati Vidhya Mandir
        </motion.h1>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/book.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default WelcomeScreen;
