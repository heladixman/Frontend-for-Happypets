import React, { useContext } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { CartContext } from '../content/files/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

const Cart = () => {
  
  const activeNavbar = 'fixed right-0 top-0 w-[65%] md:w-[18%] h-full bg-white ease-in-out duration-500 z-20 shadow-2xl';
  const normalNavbar = 'left-[-100%] top-0 w-[55%] h-full bg-white ease-in-out duration-500 fixed';
  const {cart, removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

  return (
    <div className='min-w-screen bg-slate-500'>
      <div>
        {/* <div className='fixed right-0 top-0 w-full h-full bg-black opacity-70'></div> */}
        <div className={activeNavbar}>
          <div className='justify-between p-3 flex mx-3'>
            <div className='text-xl'>Cart</div>
            <div className='text-xl'><BiRightArrowAlt size={30}/></div>
          </div>
          <div className='text-center py-5'>
            {cart.map((item,key)=>{ 
              return <div key={key}>{item.title}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart