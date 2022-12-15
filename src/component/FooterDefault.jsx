import React from 'react'
import { footerSocial } from '../content/files/dummyData'

const FooterDefault = () => {
  return (
    <div className='absolute inset-x-0 bottom-0 max-w-[1200px] mx-auto px-4'>
      <div className="md:flex items-center border-t border-slate-400/10 py-10 lg:justify-between">
        <div className="flex gap-x-6">
          {footerSocial.map((item, key)=>{
            return <a key={key} className="group hover:bg-gray-100 p-2 rounded-full" href={item.link}>{item.icon}</a>
          })}
        </div>
          <p class="mt-6 text-sm text-slate-500 sm:mt-0">Copyright ©2022 Happypets. All rights reserved.</p>
        </div>
    </div>
  )
}

export default FooterDefault

// className='flex justify-between items-center  mx-auto px-4'