import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs'
import { Links } from '../content/files/dummyData';
import { Cart } from '../pages';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleCart = () =>{
    setCart(!cart)
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const activeNavbar = 'z-100 left-0 top-0 w-[55%] h-full bg-white ease-in-out duration-500 z-20 fixed shadow-2xl';
  const normalNavbar = 'z-100 left-[-100%] top-0 w-[55%] h-full bg-white ease-in-out duration-500 fixed';
  const signInButton = 'text-white bg-card2 hover:shadow-xl hover: rounded-full text-sm px-5 py-2.5 text-center'

  return (
      <div className='fixed top-0 w-full bg-gray-100 shadow-lg shadow-gray-100'>
        <div className='py-3 flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
        <div className='items-center'>
          <div>
            <button onClick={handleNav} className='block md:hidden text-gray-500 p-0 mr-2'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </button>
            <div>
              <ul className={nav ? activeNavbar : normalNavbar}>
                <div className='flex items-center'>
                  <h1 className='w-full text-3xl font-bold text-button-bg m-4 text-card-grad2'><a href="/">HAPPYPETS</a></h1>
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
            <h1 className='w-1/5 text-2xl font-bold text-card-grad2 hidden lg:block'><a href="/">HAPPYPETS</a></h1>
          </div>
        </div>
        <div className='w-3/5'>
          <div className='flex justify-center'>{Links.map((link, key) =>(
            <div key={key}>
              <a href={link.linkName} className="p-2 m-2 rounded-lg text-gray-500 text-sm font-thin hidden lg:block hover:bg-gray-200 focus:bg-gray-300">{link.title}</a>
            </div>))}
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          <button className='flex relative items-center w-8 mr-2' onClick={handleCart}>
            <div className='text-gray-500'><BsCart3 size={25}/></div>
            <span className='absolute top-0 right-0 text-[9px] bg-red-500 rounded-full px-1 text-white'></span>
          </button>
          <div className='hidden lg:block pr-2'>
            <a href="/sign-up">
              <button type="button" className='rounded-full py-2.5 px-5 text-sm bg-gray-200'>Sign Up</button>
            </a>
          </div>
          <div className='hidden lg:block'>
            <a href="/sign-in">
              <button type="button" className={signInButton}>Sign In</button>
            </a>
          </div>
          {cart ? ( <Cart/>):(<div></div>)}
        </div>
        </div>
      </div>
  );
};

export default Navbar;