import React from 'react';
import { Carousel, Card } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageSlideshow = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const popupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.3 } },
  };

  return (
    <div className="w-screen bg-red-800">
      <div className=" h-96 object-cover sm:h-96 xl:h-96 2xl:h-96">
        <Carousel className="h-full">
          <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="..."/>
          <img src="https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
          <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
          <img src="https://images.unsplash.com/photo-1625050795880-ae615b56da68?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
          <img src="https://images.unsplash.com/photo-1533047218705-9d453c0e39fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        </Carousel>
      </div>
      <motion.div
      ref={ref1}
      initial="hidden"
      animate={inView1 ? "visible" : "hidden"}
      variants={popupVariants} className='what-we-do mt-8 mb-8'>
        <h1 className='text-center text-2xl mb-6 text-black-300'><em className='text-blue-300'>What </em><span className='bg-blue-300 skew-y-12 capitalize hover:uppercase font-semibold px-3 py-2 pb-2'>We Do</span> </h1>
      
      <div
      ref={ref1}
      initial="hidden"
      animate={inView1 ? "visible" : "hidden"}
      variants={popupVariants}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-red-800 mx-auto pt-0">
        <Card className="max-w-full sm:max-w-sm mx-auto transform hover:scale-105 ease-out duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.unsplash.com/photo-1565350831386-8c52421af9fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          EXPERIENCED FACULTIES AT SVM
          
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           Our organization has vastly experienced, also young and dynamic staff!
            </p>
        </Card>
        <Card 
          className="max-w-full sm:max-w-sm mx-auto transform hover:scale-105 ease-out duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://i0.wp.com/www.terratechmsc.eu/wp-content/uploads/2022/01/Interactive-teaching-methods-2.jpeg?resize=900%2C507"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TRADITIONAL LEARNING METHODS
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            At SVM, Learning and Teaching follows the traditional methods along with the technology props!
          </p>
        </Card>
        <Card
          className="max-w-full sm:max-w-sm mx-auto transform hover:scale-105 ease-out duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://indiafacts.org/wp-content/uploads/2016/12/Untitled-11.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            CULTURE BASED EDUCATION AT SVM
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            SVM is known for its culture based education, and its proven to be effective, we stick to our roots!
          </p>
        </Card>
        
      </div>
    </motion.div>
    </div>
  );
};

export default ImageSlideshow;
