import React from 'react'
import { articleList } from '../content/files/dummyData'

const Articles = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      {articleList.map((item, key) =>(
        <div key={key} class="max-w-[48%] lg:w-[18%] md:w-[30%] mb-5 bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="#"><img class="rounded-t-lg w-full" src={item.image} alt="" /></a>
        <div class="p-5">
            <a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.tittle}</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        </div>
    </div>
      ))}
    </div>
  )
}

export default Articles