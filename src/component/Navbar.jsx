import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs'
import { Links } from '../content/files/dummyData';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const statusLogin = true

  const handleNav = () => {
    setNav(!nav);
  };

  const activeNavbar = 'left-0 top-0 w-[55%] h-full bg-white ease-in-out duration-500 z-20 fixed shadow-2xl';
  const normalNavbar = 'left-[-100%] top-0 w-[55%] h-full bg-white ease-in-out duration-500 fixed';
  const loginRegisButton = 'text-white bg-gradient-to-r from-main-color to-gradient-color hover:bg-blue-800 font-medium shadow-lg hover:shadow-shadow-color hover: rounded-full text-sm px-5 py-2.5 text-center'

  return (
    <div className='pt-6'>
      {/* Bottom Navbar */}
      <div className=' flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
        <div className='flex items-center'>
          <div>
            <button onClick={handleNav} className='block md:hidden text-gray-500 p-0 mr-2'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </button>
            <div>
              <ul className={nav ? activeNavbar : normalNavbar}>
                <div className='flex items-center'>
                  <h1 className='w-full text-3xl font-bold text-button-bg m-4 text-main-color'><a href="/">HAPPYPETS</a></h1>
                  <div className='text-main-color m-2'>
                    <div className='bg-white rounded-full shadow-lg shadow-gray-500/50 items-center px-1'>
                      <button onClick={handleNav}><AiOutlineClose size={15}/></button></div>
                  </div>
                </div>
                {Links.map((item,key) =>(
                <a key={key} href={item.linkName}>
                  <div className="hover:bg-green-200">
                    <li className='p-4 border-b border-gray-100 text-black'>{item.title}</li>
                  </div>
                </a>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h1 className='w-1/5 text-xl font-bold text-main-color hidden lg:block'><a href="/">HAPPYPETS</a></h1>
          </div>
        </div>
        <div className='w-3/5'>
          <div className='flex justify-center'>{Links.map((link, key) =>(
            <div key={key}>
              <a href={link.linkName} className="pr-5 text-gray-500 text-md font-thin hidden lg:block">{link.title}</a>
            </div>))}
          </div>
        </div>
        <div className='flex justify-between'>
          <button className='flex relative items-center w-8'>
            <div className='text-gray-500'><BsCart3 size={25}/></div>
            <span className='max-h-3 max-w-6 absolute top-0 right-0 text-[9px] bg-red-500 rounded-lg px-1 font-bold text-white'>+99</span>
          </button>
          <button className='flex relative items-center w-8 ml-2 hidden lg:block'>
          <div className='text-gray-500'><IoIosNotificationsOutline size={30}/></div>
            <span className='max-h-3 max-w-6 absolute top-0 right-0 text-[9px] bg-red-500 rounded-lg px-1 font-bold text-white'>+99</span>
          </button>
        </div>
        <div className='flex flex-wrap'>
          <div className='hidden lg:block pr-2'>
            <a href="/login">
              <button type="button" className='rounded-full py-2.5 px-5 text-sm bg-gray-200'>Sign Up</button>
            </a>
          </div>
          <div className='hidden lg:block'>
            <a href="/login">
              <button type="button" className={loginRegisButton}>Sign In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;