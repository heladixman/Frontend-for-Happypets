import React from 'react'
import { Helmet } from 'react-helmet'

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In | Happypets</title>
      </Helmet>

        <div className="flex w-full py-24 justify-center">
            <div className="w-full p-6 rounded-md lg:max-w-xl shadow-none lg:shadow-xl">
                <h1 className="text-3xl font-semibold text-center text-card-grad2 uppercase">
                    Sign in
                </h1>
                <form className="mt-6" >
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" required={true}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            required={true}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-card-grad2 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-card2 rounded-md hover:bg-card1 focus:outline-none focus:bg-card2" type='submit'>Sign In
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-card-grad2 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
                <p className='mt-8 text-xs font-light text-center text-gray-700'></p>
            </div>
        </div>
    </div>
  )
}

export default Login