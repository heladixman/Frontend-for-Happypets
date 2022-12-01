import React from 'react'
import NotFoundSVG from '../content/files/NotFoundSVG'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='items-center leading-8 gap-5'>
        <div>
            <NotFoundSVG/>
            <span>Halaman yang kamu cari tidak ditemukan</span>
        </div>
        <div className='justify-center items-center'>
            <button className='bg-button-bg rounded-lg p-2'>
                <Link to="/">Kembali ke Halaman Utama</Link>
            </button>
        </div>
    </div>
  )
}

export default NotFound