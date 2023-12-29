import React from "react";

const Footer = () => {
  return (
    <div className="bg-teal-100 w-screen">
      <h1 className="text-center text-3xl pt-4 font-semibold">
        <span className="text-3xl rounded-sm font-serif bg-lime-200">
          Contact
        </span>{" "}
        Us
      </h1>
      <div className="grid md:grid-cols-2 gap-10 px-4 py-8 md:py-12">
        {/* Map iframe */}
        <div className="w-full md:h-96">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.0238327387551!2d69.33762544442746!3d23.095350900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39513e358d2dffb7%3A0x3cd1aac46b10b0cf!2sShree%20Saraswati%20Vidhya%20Mandir!5e0!3m2!1sen!2sin!4v1700305536473!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-2xl"

          ></iframe>
        </div>
        {/* School's photo */}
        <div className="w-full md:h-96">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMBELVV6DX0nPMD0jjzXuGeJ06lPyQ4V4uPpM_l=s1360-w1360-h1020"
            alt="School"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="text-center pb-8 md:pb-12">
        {/* Address */}
        <p className="font-semibold">
          Address: Saraswati Madhyamik Vidhyamandir, Nr. Ramdev pir Mandir,
          Gadhsisa(Kutch)-370445
        </p>
        {/* Social icons or contacts */}
        <div className="flex items-center justify-center mt-2">
          <p className="mr-3 font-semibold">Connect with us:</p>
          <ul className="list-none p-0 flex">
            <li className="inline-block mx-3">
              <a href="social-link" target="_blank">
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt="Social Icon 1"
                  className="transform hover:scale-150 transition duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="inline-block mx-3">
              <a href="social-link">
                <img
                  src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  alt="Social Icon 2"
                  className="transform hover:scale-150 transition duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="inline-block mx-3">
              <a href="social-link">
                <img
                  src="https://img.icons8.com/fluent/30/000000/whatsapp.png"
                  alt="Social Icon 2"
                  className="transform hover:scale-150 transition duration-300 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-3"> 
          <span className="block text-gray-700 dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              SVM™
            </a>
            . All Rights Reserved. Developed By
          </span>
          <a
            className="hover:underline hover:font-semibold ml-1"
            target="_blank"
            href="https://www.linkedin.com/in/ashwin-rangani-078aa2242/"
          >
            Ashwin Rangani
          </a>{" "}
          
          <a
            href="https://github.com/ashwinrangani"
            target="_blank"
            className="ml-1 flex items-center"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/github.png"
              alt="GitHub Icon"
              className="transform hover:scale-150 transition duration-100 ease-in-out"
            />
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;