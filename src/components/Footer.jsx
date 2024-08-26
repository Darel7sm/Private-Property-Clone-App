import React, { useEffect, useState } from 'react'
import { CiFacebook, CiTwitter, CiYoutube } from 'react-icons/ci'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear())
    }
    updateYear()
  }, [])
  return (
    <div className="bg-black text-slate-300 px-10 py-8 max-sm:px-2">
      <div className="flex justify-between lg:text-sm max-sm:text-xs max-sm:flex-wrap max-sm:gap-1 md:flex-wrap md:text-xs">
        <div className="max-sm:w-2/5 max-sm:text-xs md:w-1/5">
          <h2 className="lg:font-semibold lg:text-2xl pb-5 max-sm:text-sm">PROPERTY</h2>
          <p className="hover:text-green-400">Property For Sale</p>
          <p className="hover:text-green-400">Property To Rent</p>
          <p className="hover:text-green-400">Property On Show</p>
          <p className="hover:text-green-400">Development</p>
          <p className="hover:text-green-400">Commercial Sales</p>
          <p className="hover:text-green-400">Commercial Rentals</p>
          <p className="hover:text-green-400">
            Bank Assisted Sales & Repossessions
          </p>
          <p className="hover:text-green-400">Find an Estate Agent</p>
          <p className="hover:text-green-400">Farms For Sale</p>
        </div>
        <div className="max-sm:w-1/5 max-sm:text-xs">
          <h2 className="lg:font-semibold lg:text-2xl pb-5 max-sm:text-sm">ADVERTISE</h2>
          <p className="hover:text-green-400">List Your Property For Sale</p>
          <p className="hover:text-green-400">List Your Property To Rent</p>
          <p className="hover:text-green-400">For Estate Agents</p>
        </div>
        <div className="max-sm:w-1/5 max-sm:text-xs">
          <h2 className="lg:font-semibold lg:text-2xl pb-5 max-sm:text-sm">SERVICES</h2>
          <p className="hover:text-green-400">Property Advice</p>
          <p className="hover:text-green-400">Agent Advice</p>
          <p className="hover:text-green-400">Bond Calculator</p>
          <p className="hover:text-green-400">Affordability Calculator</p>
          <p className="hover:text-green-400">Attorneys</p>
        </div>
        <div className="max-sm:w-fit text-sm">
          <h2 className="lg:font-semibold lg:text-2xl pb-5 max-sm:text-sm max-sm:pt-10">MEDIA</h2>
          <p className="hover:text-green-400">Property News</p>
          <p className="hover:text-green-400">Neighbourhoods</p>
          <div className="flex gap-3 lg:text-3xl pt-5 md:text-lg">
            <CiFacebook className="hover:text-green-400"/>
            <CiTwitter className="hover:text-green-400"/>
            <CiYoutube className="hover:text-green-400"/>
          </div>
        </div>
        <div className="max-sm:w-fit text-sm">
          <h2 className="lg:font-semibold lg:text-2xl pb-5 max-sm:text-sm max-sm:pt-10">COMPANY</h2>
          <p className="hover:text-green-400">About Us</p>
          <p className="hover:text-green-400">Careers</p>
          <p className="hover:text-green-400">Contant Us</p>
          <p className="hover:text-green-400">Terms & Conditions</p>
          <p className="hover:text-green-400">Privacy Portal</p>
          <p className="hover:text-green-400">Cookie Preferences</p>
          <p className="hover:text-green-400">Privacy Policy</p>
          <p className="hover:text-green-400">PAIA Manual</p>
        </div>
      </div>
      <p className='text-center pt-5 max-sm:text-xs'>
        Copyright <span>&copy;</span> Private Property South Africa (Pty) Ltd. 1997 -{' '}
        <span> {currentYear}</span>. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
