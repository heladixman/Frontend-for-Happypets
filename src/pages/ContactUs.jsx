import React from 'react'
import { contactForm, addressStore } from '../content/files/dummyData'


const ContactUs = () => {
  return (
    <div className=''>
      <div className='w-full'><iframe width="1150" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=al%20petshop&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
      <div className='mx-auto flex justify-between mt-10 max-w-2xl bg-slate-100 p-10'>
        <div className='w-3/6 mr-10'>
          <div className='justify-center'>
            <form action="">
            <label for="product-name" class="text-black dark:text-gray-200 w-1/5">Hubungi Kami</label>
              {contactForm.map((item, key) => (
                <div key={key} className='content-center items-center w-full'>
                  <input className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-2" placeholder={item.placeholder} required></input>
                </div>
              ))}
              <textarea className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-2' name="pesan" id="" cols="30" rows="5" placeholder='masukkan pesanmu disini'></textarea>
              <button type="submit" className='bg-sky-500 w-full hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white'>Kirim Pesan</button>
            </form>
          </div>
        </div>
        <div className='w-3/6'>
          <div className='justify-center'>Alamat Toko
           {addressStore.map((item) => (
            <div className='my-2'>
              <span className='font-bold'>{item.nameStore}</span>
              <p>{item.address}</p>
            </div>
           ))}
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default ContactUs