import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs'
import { Links } from '../content/files/dummyData';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const activeNavbar = 'left-0 top-0 w-[55%] h-full bg-white ease-in-out duration-500 z-20 fixed shadow-2xl';
  const normalNavbar = 'left-[-100%] top-0 w-[55%] h-full bg-white ease-in-out duration-500 fixed';
  const loginRegisButton = 'text-white bg-gradient-to-r from-main-color to-gradient-color hover:bg-blue-800 font-medium shadow-lg hover:shadow-shadow-color hover: rounded-2xl text-sm px-5 py-2.5 text-center'

  return (
    <div className='lg:h-24 top-0 h-12'>
      {/* Top Navbar */}
      <div className='items-center w-full bg-gray-100 hidden lg:block'>
        <div className='max-w-[1200px] mx-auto py-1'>
          <div className='flex justify-end'>{Links.map((link, key) =>(
            <div className={key}>
              <a href={link.linkName} className="pr-4 text-gray-500 text-sm font-thin hidden lg:block">{link.title}</a>
            </div>))}
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className=' flex justify-between items-center max-w-[1200px] px-4 mt-2.5 mx-auto'>
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
                <a href={item.linkName}>
                  <div key={key} className="hover:bg-green-200">
                    <li className='p-4 border-b border-gray-100 text-black'>{item.title}</li>
                  </div>
                </a>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h1 className='w-1/5 text-2xl font-bold text-main-color'><a href="/">HAPPYPETS</a></h1>
          </div>
        </div>
        <div className='w-3/5'>
          <div className='hidden lg:block'>
            <div class="flex justify-center items-center">
                <div class="relative">
                  <input type="text" class="h-10 w-[700px] pl-3 rounded-xl border border-gray-200 z-0 focus:border-main-color focus:outline-none text-sm" placeholder="Cari semua disini..."/>
                    <div class="absolute top-[0.5px] right-[0.1px]">
                      <button class="text-white rounded-r-xl p-[0.71em] bg-gray-200 hover:bg-gray-300 items-center"><AiOutlineSearch/></button>
                    </div>
                </div>
            </div>
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
        <div>
          <div className='hidden lg:block'>
            <a href="/login">
              <button type="button" class={loginRegisButton}>Login / Register</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
{/* <div className='z-10 fixed top-0 left-0 w-screen h-screen bg-yellow-700 bg-opacity-10'></div> */}