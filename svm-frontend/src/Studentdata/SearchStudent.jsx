import axios from 'axios';
import React, { useState } from 'react';

const SearchStudents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = async (query) => {
    try {
      const { data } = await axios.get(`https://svm-backend.onrender.com/search?query=${query}`);
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching students:', error);
    }
  };

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setSearchQuery(searchText);

    
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      handleSearch(searchText);
    }, 300); 

    setTypingTimeout(timeout);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search by name, roll number, or address..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full rounded-full md:w-96 py-2 pl-8 pr-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {searchQuery && (
        <ul className="absolute bg-white rounded-md shadow-lg mt-2 w-full md:w-96 overflow-y-auto max-h-48 z-10">
          {searchResults.map((student, index) => (
            <li key={index} className="text-gray-800 py-2 px-4 hover:bg-gray-100">
              Name: {student.studentname}, Std: {student.standard}, Roll Number: {student.rollnumber}, GR: {student.uid}, Address: {student.address}
              {/* Add more */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchStudents;
