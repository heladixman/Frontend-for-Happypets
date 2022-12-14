import React, {useContext, useState} from 'react'
// import product
import { ProductContext } from '../content/files/ProductContext'

const Homepage = () => {
  // ambil data product dari ProductContext
  const products = useContext(ProductContext);
  // console.log(products)

  const filterMenProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    )
  })
  
  return <div>
    <section>
      <div className="container mx-auto">
       
        {/* product */}
        <div className='my-5'>
            <div className='text-center text-black font-bold text-3xl font-nunito'>Reliable Healthy Food</div>
            <div className='text-center text-black font-bold text-3xl font-nunito'>for your pet</div>
            <div>
              <div className='flex justify-center p-2'>
                <button className='rounded-full bg-card2 py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Premium Food</button>
                <button className='rounded-full bg-card2 py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Cat Suits</button>
                <button className='rounded-full bg-card2 py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Cat Pants</button>
                <button className='rounded-full bg-card2 py-2 px-4 bg-gray-100 hover:bg-gray-200 mx-2'>Accessories</button>
              </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          {filterMenProduct.map((product,key) =>{
            return <div class="mb-3 bg-white rounded-2xl max-w-[48%] lg:w-[18%] md:w-[30%] bg-white shadow-lg hover:shadow-2xl">
            <a href="#!">
              <div class="bg-white max-w-sm">
                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                <div class="p-4">
                  <p class="text-gray-900 font-bold text-xs uppercase">{product.category}</p>
                  <p class="text-gray-700 text-sm truncate">{product.title}</p>
                  <p class="text-gray-900 font-bold text-md">${product.price}</p>
                </div>
              </div>
            </a>
          </div>
          })}
        </div>

        {/* card promo */}
        <div class="p-10 w-full bg-card1 rounded-3xl mt-5 mb-8">  
          <div class="flex justify-between">
            <div class="px-6 py-4 w-2/4">
              <div class="font-bold text-3xl font-nunito">Hari Kebersamaan</div>
              <p class="text-gray-700 text-base">Rayakan hari kebersamaan seperti ulang tahunnya, banyak kejutannya banyak diskonnya. Booking sekarang!</p>
              <button className='text-white bg-card-grad2 font-medium shadow-lg hover: rounded-xl text-sm px-5 py-2.5 mt-3 text-center'>Book a Schedule</button>
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Image</div>
              <p class="text-gray-700 text-base">this is the image containt</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
}

export default Homepage