import { useRef, useState, useEffect } from 'react'
import {  Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AudioPlayer from './../AudioPlayer/AudioPlayer';
import ClassModal from './../LoginModal/ClassModal';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Gallery', href: '#gallery', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact', href: '#contact', current: false },
 ];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar () {

  const [showNotification, setShowNotification] = useState(false);
  const buttonRef = useRef();
 
  const [notification, setNotification] = useState([
    { id: 1, message: 'Notification 1', read: false },
    { id: 2, message: 'Notification 2', read: false },
  ]);

  const [count, setCount] = useState(0);

  const unreadCount = notification.filter((item) => !item.read).length;

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setShowNotification(false);
    }
  };

  const handleClickButton = () => {
    setShowNotification((prevState) => !prevState);
    setCount(0);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCount(unreadCount); 
  }, [unreadCount]);

  return (
    <Disclosure as="nav" className="bg-red-800 opacity-90 fixed w-screen z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-11 w-10 "
                    src="./vidhya-bharti-logo.png"
                    alt="SVM"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-3 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      
                    ))}
                  </div>
                  
                </div>
                <div className="hidden  sm:ml-6 sm:w-full sm:block">
                  <div className="flex space-x-6 py-0.5"></div>
                  <AudioPlayer />
               
                  </div>
               </div>
             
              
          
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div ref={buttonRef} className="relative inline-block text-left">
              <button
                onClick={handleClickButton}
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                {unreadCount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1">
            {count}
          </span>
        )}
              </button>
              {showNotification && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {notification.map((item) => (
                      !item.read && (
                        <div key={item.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                          {item.message}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
            
                <ClassModal/>
              

                
                
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
            </div>
            <div className='relative inline-flex items-center sm:items-stretch justify-center rounded-md px-2 pt-0 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
            <AudioPlayer />
            </div>
            
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
  )
}
