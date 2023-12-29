import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Button } from 'flowbite-react';
import AddStudent from "./AddStudent";
import StudentsList from "./StudentsList";
import SearchStudents from "./SearchStudent";


axios.defaults.withCredentials = true;

const Header = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [selectedStandard, setSelectedStandard ] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2023-2024');
 

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        console.log("no cookies/token");
      } else {
        try {
          const { data } = await axios.post(
            "http://localhost:4000/students",
            {},
            { withCredentials: true, }
          );
          const { user } = data;
          setUsername(user);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };

  const handleStandardClick = (standard) => {
    setSelectedStandard(standard)
  }

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  }
  return (
    <>
     
  <div className="pt-20  md:px-0 flex flex-col items-center bg-slate-100">
 
  <div className="flex justify-between w-full mb-6">
 
    <Button gradientMonochrome="cyan" className="ml-2" onClick={Logout}>
      LOGOUT
    </Button>
    
   
    <h1 className="text-xl font-mono font-bold text-gray-800 mr-2">
      Welcome, <span className="text-blue-500">{username}</span>
    </h1>
    
  </div>
  

  <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6 w-full">
    Classwise Student's List
  </h2>
  <div className="mb-6">
     <AddStudent />
     
     </div>
     <div className="flex flex-col gap-1 w-80 items-center sm:flex-row sm:gap-4 sm:w-auto">
      
<label htmlFor="academicyear" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Academic Year</label>
<select
  id="academicYear"
  className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={selectedYear}
  onChange={(e) => handleSelectYear(e.target.value)}
>
<option value="">Select a year</option>
  <option value="2023-2024">2023-2024</option>
  <option value="2024-2025">2024-2025</option>
</select>


     
     <div className="w-96">
     <SearchStudents />
     </div>
     </div>
  <div className="flex flex-wrap justify-center space-x-2">
    <Button className="mb-2" onClick={() => handleStandardClick(1)} >Std 1</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(2)}>Std 2</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(3)}>Std 3</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(4)}>Std 4</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(5)}>Std 5</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(6)}>Std 6</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(7)}>Std 7</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(8)}>Std 8</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(9)}>Std 9</Button>
    <Button className="mb-2" onClick={() => handleStandardClick(10)}>Std 10</Button>
  </div>
  </div>
  <div className="flex justify-center items-center bg-slate-100">
      {selectedYear && selectedStandard && <StudentsList selectedStandard={selectedStandard} selectedYear={selectedYear} />}
</div>

</>

  );
};

export default Header;
