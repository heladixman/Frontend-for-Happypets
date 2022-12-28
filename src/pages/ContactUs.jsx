import React from "react";
import { Helmet } from "react-helmet";
import { contactForm, addressStore } from "../content/files/dummyData";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Happypets</title>
      </Helmet>

      <div class="w-full flex">
        <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')]"></div>
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Hubungi Kami</h3>
          <h3 class="text-sm text-center">Tanyakan sesuatu kepada kami</h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <div class="mb-2">
                <label
                  for="name"
                  class="block text-sm font-semibold text-gray-800"
                >
                  Nama
                </label>
                <input
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mb-2">
                <label
                  for="email"
                  class="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mb-2">
                <label
                  for="Message"
                  class="block text-sm font-semibold text-gray-800"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows="6"
                  cols="50"
                  class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>
            </div>
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-card2 rounded-md hover:bg-card1 focus:outline-none focus:bg-card2"
              type="submit"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
