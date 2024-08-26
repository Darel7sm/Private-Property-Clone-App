import React, { useState } from 'react'
import { VscAccount, VscClose } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import { CiFacebook } from 'react-icons/ci'

const Navbar = () => {
  const [isAccountProfileOpen, setIsAccountProfileOpen] = useState(false)

  const handleAccountProfile = () => {
    setIsAccountProfileOpen(!isAccountProfileOpen)
  }

  const closeAccountProfile = () => {
    setIsAccountProfileOpen(false)
  }

  return (
<nav className="flex justify-between bg-black text-slate-50 p-3 place-items-center max-sm:gap-8">
      <div className="flex w-100 place-items-center gap-2 font-semibold max-sm:w-24">
        <img src={logo} alt="Private Property" onClick={() => (window.location.href = '/')}/>
      </div>

      <div className="max-sm:w-48">
        <ul className="flex gap-5 place-items-center text-slate-300 max-sm:gap-2 max-sm:text-xs">
          <li className="hover:text-green-500">Buy</li>
          <li className="hover:text-green-500">Rent</li>
          <li className="hover:text-green-500">Sell</li>
          <li className="hover:text-green-500">Advice</li>
          <li className="hover:text-green-500">Services</li>
          <li>
            <VscAccount
              className="text-3xl hover:text-green-400 cursor-pointer max-sm:text-base"
              onClick={handleAccountProfile}
            />
          </li>
        </ul>
      </div>

      {isAccountProfileOpen && (
        <div className="bg-gray-200 text-black p-7 absolute lg:top-1/4 lg:right-1/4 lg:w-2/4 lg:h-2/4 max-sm: top-20 max-sm:w-80 max-sm:right-8 md:right-24">
          <VscClose
            className="font-bold text-3xl bg-white p-1 rounded-full mb-5 hover:bg-green-400"
            onClick={closeAccountProfile}
          />
          <h2 className="font-bold lg:text-3xl text-center pb-5 md:text-lg">
            Sign in or create account to save your favourite homes
          </h2>
          <div className="flex justify-center">
            <input type="text" placeholder="Your Email" className="p-1 w-2/3" />
          </div>
          <div className="flex justify-center my-4">
            <button className="px-5 py-2 bg-green-400 w-2/3 hover:text-white">
              Sign in or create account
            </button>
          </div>
          <p className="flex place-content-center place-items-center gap-2">
            Or sign in with{' '}
            <CiFacebook className="text-3xl hover:text-green-400" />
          </p>
          <p className="text-center my-4 text-xs">
            I accept Private Property's Terms and Conditions
          </p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
