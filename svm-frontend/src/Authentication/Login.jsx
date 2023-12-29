import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://svm-backend.onrender.com/login', {
        email,
        password,
      });

      // the backend returns {message, success} as json
      if (response.data.success) {
        toast.success('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/students');
        }, 2000); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code outside the range of 2xx
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
        toast.error('Request error: Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error', error.message);
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 h-screen ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen h-88 md:h-auto lg:py-0">
        <div className="w-full mt-20 h-full bg-slate-300 rounded-lg shadow sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 pt-10 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  autoComplete="on"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >               
                Login to your account 
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
