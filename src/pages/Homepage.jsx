import React, {useContext} from 'react'
import {Helmet} from 'react-helmet'
import cat from '../content/images/cat.png'
// import product
import { ProductContext } from '../content/files/ProductContext'
import Heroku from '../component/Heroku'

import { CartContext } from '../content/files/CartContext';

const Homepage = () => {
  // ambil data product dari ProductContext
  const products = useContext(ProductContext);
  console.log(products)

  const filterMenProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    )
  })

  const {addToCart} = useContext(CartContext)
  
  return <div>
      <Helmet>
        <title>Homepage | Happypets</title>
      </Helmet>

    <section>
      <div>
        <Heroku/>
        <div className='my-5'>
            <div>
              <div className='flex justify-center p-2'>
                <button className='rounded-full py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Premium Food</button>
                <button className='rounded-full py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Cat Suits</button>
                <button className='rounded-full py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Cat Pants</button>
                <button className='rounded-full py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Accessories</button>
              </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          {filterMenProduct.map((product,key) =>{
            return <div key={key} className="mb-3 max-w-[48%] lg:w-[18%] md:w-[30%] bg-white roun7ded-2xl">
            {/* <a href={`/marketplace/product/${product.id}`}> */}
              <div className="bg-white max-w-sm ">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                {/* buttons */}
                <div className="p-4 bg-white rounded-b-lg shadow-lg hover:shadow-2xl"> 
                  <p className="text-gray-900 font-bold text-xs uppercase">{product.category}</p>
                  <p className="text-gray-700 text-sm truncate">{product.title}</p>
                  <p className="text-gray-900 font-bold text-md">${product.price}</p>
                  <div className='mt-2 flex flex-wrap justify-between'>
                    <div className='text-white text-xs px-2 py-1 bg-red-500 rounded-md w-full text-center'>
                      <button onClick={()=> addToCart(product, product.id)}>Add to cart</button>
                    </div>
                    {/* <div className='text-black text-xs px-2 py-1 bg-gray-300 rounded-md'>
                      <button>View Product</button>
                    </div> */}
                  </div>
                </div>
              </div>
            {/* </a> */}
          </div>
          })}
        </div>
      </div>

      {/* review */}


      {/* card promo */}
      <div className="p-10 w-full bg-card1 rounded-3xl my-5">  
          <div className="flex justify-between">
            <div className="px-6 py-4 w-3/4 md:w-[600px] m-auto">
              <div className="md:font-bold font-normal md:text-3xl text-lg font-nunito">Hari Kebersamaan</div>
              <p className="text-gray-700 md:text-base text-sm">Rayakan hari kebersamaan seperti ulang tahunnya, banyak kejutannya banyak diskonnya. Booking sekarang!</p>
              <button className='text-white bg-card-grad2 font-medium shadow-lg hover: rounded-xl text-sm px-5 py-2.5 mt-3 text-center'>Book a Schedule</button>
            </div>
              <div className='md:w-1/4 w-2/4'>
                <img src={cat} alt="kucing" />
            </div>
          </div>
        </div>


    </section>
    </div>
}

export default Homepage