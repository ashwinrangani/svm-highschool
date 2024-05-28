import React, { useState } from "react";
import { useEffect } from "react";



const imageNavratri = [
  { src: "/navratri/IMG-20231021-WA0288.jpg" },
  { src: "/navratri/IMG-20231021-WA0290.jpg" },
  { src: "/navratri/IMG-20231021-WA0298.jpg" },
  { src: "/navratri/IMG-20231021-WA0362.jpg" },
  { src: "/navratri/IMG-20231021-WA0377.jpg" },
  { src: "/navratri/IMG-20231021-WA0382.jpg" },
  { src: "/navratri/IMG-20231021-WA0478.jpg" },
  { src: "/navratri/IMG-20231206-WA0009.jpg" },
  
];

const imageSports = [
  { src: "/khelmahotsav/IMG20231025080332.jpg" },
  { src: "/khelmahotsav/IMG20231025080454.jpg" },
  { src: "/khelmahotsav/IMG20231025081237.jpg" },
  { src: "/khelmahotsav/IMG20231025081351.jpg" },
  { src: "/khelmahotsav/IMG20231025081708.jpg" },
  { src: "/khelmahotsav/IMG20231025082120.jpg" },

  
];

const imageGanesh = [
  { src: "/ganeshutsav/IMG-20230921-WA0101.jpg" },
  { src: "/ganeshutsav/IMG-20230920-WA0015.jpg" },
  { src: "/ganeshutsav/IMG-20230921-WA0190.jpg" },
  { src: "/ganeshutsav/IMG-20230921-WA0169.jpg" },
  { src: "/ganeshutsav/IMG-20230921-WA0219.jpg" },
  { src: "/ganeshutsav/IMG-20231021-WA0017.jpg" },
  { src: "/ganeshutsav/IMG-20231021-WA0069.jpg" },
  { src: "/ganeshutsav/IMG-20231021-WA0065.jpg" },

];

const imageTeachersDay = [
  { src: "/Teachersday/IMG-20230905-WA0047.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0049.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0053.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0055.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0058.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0073.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0078.jpg" },
  { src: "/Teachersday/IMG-20230905-WA0079.jpg" },

];

const Events = () => {
  const [images, setImages] = useState(imageNavratri);
  
  useEffect(()=>{
setImages(imageNavratri.map((item)=> item.src))
  }, []);

  function handleClick(imageArray) {
    setImages(imageArray.map((image) => image.src));
  }
  


  return (
    <div 
        className="bg-red-200 w-screen" id="gallery">
      <div className="pt-2">
        <h1 className="text-center font-semibold text-3xl">Events/Activities</h1>
      </div>
      <div className="flex flex-row md:flex-row justify-center md:gap-10 ml-6 mr-6 pt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full w-full md:w-auto"
          onClick={() => handleClick(imageNavratri)}
        >
          Navratri
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto"
          onClick={() => handleClick(imageSports)}
        >
         Yoga Day
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto"
          onClick={() => handleClick(imageGanesh)}
        >
          Ganesh Utsav
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto"
          onClick={() => handleClick(imageTeachersDay)}
        >
          Teacher's Day
        </button>
      </div>
      {images.length > 0 && (
        <div className="flex flex-row gap-6 flex-wrap justify-center pt-5 transform duration-400">
          {images.map((imgSrc, index) => (
            <img 
            key={index} 
            src={imgSrc} 
            alt={`Event ${index}`}
            className="rounded-lg object-cover w-64 h-64 m-2 hover:scale-150 hover:object-fit duration-300" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
