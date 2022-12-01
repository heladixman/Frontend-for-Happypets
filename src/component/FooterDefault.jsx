import React from 'react'
import {IoHomeOutline, IoNewspaperOutline} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlinePets} from 'react-icons/md'
import {BiStore} from 'react-icons/bi'

const FooterDefault = () => {
  return (
    <div className='block md:hidden bottom-0 fixed w-full'>
        <div className='items-center bg-gray-700'>
            <div className='flex max-w-[1200px] mx-auto py-1 justify-between p-5'>
                <button className='items-center justify-center align-center'><IoHomeOutline/><span>Home</span></button>
                <button><MdOutlinePets/><span>Pets</span></button>
                <button><BiStore/><span>Marketplace</span></button>
                <button><IoNewspaperOutline/><span>Articles</span></button>
                <button><AiOutlineUser/><span>Account</span></button>
            </div>
        </div>
    </div>
  )
}

export default FooterDefault