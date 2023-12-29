import { useState } from 'react';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center text-gray-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-yellow-200">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
          <div className="py-1">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
              Username
            </p>
            <hr />
            <p
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
