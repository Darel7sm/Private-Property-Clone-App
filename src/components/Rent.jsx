import React from 'react'
import rent1 from '../assets/rent1.png'
import rent2 from '../assets/rent2.png'
import rent3 from '../assets/agent.png'
import { TiTick } from 'react-icons/ti'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import guide from '../assets/Opera Snapshot_2024-01-27_131559_www.privateproperty.co.za.png'

const Rent = () => {
  return (
    <div className='px-10 my-10'>
        <h1 className="text-center font-bold text-3xl pb-10">Property to Rent</h1>
        <p className='text-center py-7'>Whether you are a property owner looking to list your property to rent, or whether you are embarking on a new adventure and need a quality place to rent using a reputable service, then Private Property is your one-stop portal.</p>
      <div className="lg:flex lg:justify-between max-sm:grid max-sm:justify-center max-sm:text-center md:flex md:justify-between md:gap-5">
        <div className="max-sm:mb-5">
          <img src={rent1} alt="" className="rounded-lg" />
            <h3 className='font-bold'>List your rental</h3>
        </div>
        <div className="max-sm:mb-5">
          <img src={rent2} alt="" className="rounded-lg" />
            <h3 className='font-bold'>Commercial rentals</h3>
        </div>
        <div className="max-sm:mb-5">
          <img src={rent3} alt="" className="rounded-lg" />
            <h3 className='font-bold'>Find a rental agent</h3>
        </div>
      </div>

      <p className='text-center pt-10 text-2xl'>For the property owners, here are some of the reasons to advertise your property to rent with Private Property</p>

      <div className='lg:flex lg:justify-between gap-2 px-5 py-20 max-sm:grid md:grid md:grid-cols-2'>
        <div className='grid p-5 bg-gray-200 flex-1'>
            <div className='bg-green-400 p-1 w-fit rounded-full mb-7'><TiTick/></div>
            <p>With at least 50 interested tenants per property to rent, you will find a tenant in no time. <br /><br /><br /></p>
        </div>
        <div className='grid p-5 bg-gray-200 flex-1'>
            <div className='bg-green-400 p-1 w-fit rounded-full mb-7'><TiTick/></div>
            <p>We offer you the perfect platform to advertise your property to rent using a full gallery of photos, detailed property description and pinned map location.</p>
        </div>
        <div className='grid p-5 bg-gray-200 flex-1'>
            <div className='bg-green-400 p-1 w-fit rounded-full mb-7'><TiTick/></div>
            <p>Part of our advertising service includes free email and SMS alerts to tenants in your area, providing notification of your property to rent.</p>
        </div>
        <div className='grid p-5 bg-gray-200 flex-1'>
            <div className='bg-green-400 p-1 w-fit rounded-full mb-7'><TiTick/></div>
            <p>Our trustworthy platform ensures all property owners are vetted, attracting tenants seeking a reliable service. <br /><br /></p>
        </div>
      </div>

      <div className="flex gap-10 pb-16 max-sm:grid">
        <div className="flex-1">
          <img src={r1} alt="" className="rounded-lg" />
            <h3 className='font-bold py-3'>Commercial property to rent</h3>
            <p>If you’re looking for commercial property to rent, we have thousands of listings across all nine of South Africa’s provinces. Alongside the easy-to-navigate property listings, we offer helpful property insights that will guide you in either renting or renting out a residential or commercial property.</p>
        </div>
        <div className="flex-1">
          <img src={r2} alt="" className="rounded-lg" />
            <h3 className='font-bold py-3'>Find a rental agent</h3>
            <p>Assistance is also available in the form of South Africa’s leading estate agents who can be easily located on the Private Property site. They will offer guidance in the rental process and legalities, including elements such as:</p>
        </div>
      </div>

      <p className='text-center pt- text-2xl'>Looking for – or advertising – a property to rent is made easy with Private Property. Connect with us today!</p>

      <hr className='my-10 border {} border-black w-400'/>

        <div className='flex place-items-center gap-10 max-sm:grid'>
            <div><img src={guide} alt="" /></div>
            <div className='md:w-1/2'>
                <h2 className='font-bold text-5xl pb-10'>SA’s ultimate property guide.</h2>
                <p>270 pages of sound, unbiased advice, covering 140 essential topics on first-time renting, buying, selling and investing in residential property.</p>
                <button className='px-5 py-2 bg-green-400 rounded-sm mt-10'>Buy Now</button>
            </div>
        </div>

      <hr className='my-10 border {} border-black w-400'/>

      <div className='py-10'>
        <h2 className='text-center font-medium text-3xl pb-10'>Market your property to millions of property shoppers every month</h2>
        <div className='flex justify-center gap-5'>
            <button className='px-5 py-2 bg-black text-white hover:text-green-400'>List For Sale</button>
            <button className='px-5 py-2 bg-green-400 hover:text-white'>List To Rent</button>
        </div>
      </div>
    </div>
  )
}

export default Rent
