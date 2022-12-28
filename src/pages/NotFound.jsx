import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found | Happypets</title>
      </Helmet>

      <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <img
            className="hidden lg:block"
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt=""
          />
          <img
            className="hidden md:block lg:hidden"
            src="https://i.ibb.co/c1ggfn2/Group-193.png"
            alt=""
          />
          <img
            className="md:hidden"
            src="https://i.ibb.co/8gTVH2Y/Group-198.png"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base text-gray-800">
            Jika halaman yang kamu cari tidak ditemukan silahkan periksa kembali
            link tujuan.
          </p>
          <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-slate-600 text-white hover:bg-card2 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            <a href="/">Kembali ke halaman utama</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
