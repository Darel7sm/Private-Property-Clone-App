import React from 'react'
import rentImg from '../assets/rent-img.png'
import buyImg from '../assets/buy-img.png'
import sellImg from '../assets/sell-img.png'
import img1 from '../assets/property-advice.png'
import img2 from '../assets/neighbourhoods.png'
import img3 from '../assets/calculator.png'
import img4 from '../assets/affordability.png'
import img5 from '../assets/agent.png'
import img6 from '../assets/attorney.png'
import buying from '../assets/buying.png'
import renting from '../assets/renting.png'
import selling from '../assets/selling.png'

const Buy = () => {
  return (
    <div className="pb-10">
      <div className="bg-neutral-100 px-5 pb-10">
        <h2 className="text-center py-8 font-black text-2xl max-sm:text-base">
          Ready for change? Let us help you.
        </h2>
        <div className="flex flex-auto gap-8 max-sm:grid">
          <div className="">
            <div className="flex justify-center">
              <img src={buyImg} alt="" className="grid" />
            </div>
            <h3 className="text-center py-5 font-black ">Buy</h3>
            <p className="text-center">
              With thousands of properties for sale on our site, we can help you
              find your space
            </p>
            <div className="flex justify-center">
              <button className="bg-green-400 px-5 rounded-md hover:bg-white mt-6">
                Start your search
              </button>
            </div>
          </div>

          <div className='max-sm:flex max-sm:place-content-center'>
            <hr className="border {} border-gray-200 h-72 max-sm:h-0 max-sm:w-80 max-sm:border-black max-sm:my-5 "/>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={rentImg} alt="" className="grid" />
            </div>
            <h3 className="text-center py-5 font-black ">Rent</h3>
            <p className="text-center">
              Find a rental space that you'll love or advertise your rental
              property on our siye
            </p>
            <div className="flex gap-4 place-content-center mt-6">
              <button className="bg-green-400 px-5 rounded-md hover:bg-white">
                Find a rental
              </button>
              <button className="bg-green-400 px-5 rounded-md hover:bg-white">
                Rent you property
              </button>
            </div>
          </div>

          <div className='max-sm:flex max-sm:place-content-center'>
            <hr className="border {} border-gray-200 h-72 max-sm:h-0 max-sm:w-80 max-sm:border-black max-sm:my-5 "/>
          </div>

          <div className=""> 
            <div className="flex justify-center">
              <img src={sellImg} alt="" className="grid" />
            </div>
            <h3 className="text-center py-5 font-black ">Sell</h3>
            <p className="text-center">
              Advertise with us and have your property seen by millions of
              people
            </p>
            <div className="flex justify-center">
              <button className="bg-green-400 px-5 rounded-md hover:bg-white mt-8">
                Sell your property
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-10 max-sm:grid max-sm:place-content-center">
        <h2 className='text-center font-black text-2xl py-12 align-middle'>Tools to assist you</h2>
        <div className='lg:flex lg:flex-wrap lg:justify-between max-sm:grid max-sm:place-items-center max-sm:text-center md:grid md:grid-cols-2 md:place-content-center'>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img1} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Property Advice</h3>
            <p>All your property related advice.</p>
          </div>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img2} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Neighbourhoods</h3>
            <p>Get to know SA's best neighbourhoods.</p>
          </div>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img3} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Bond calculator</h3>
            <p>Calculate your monthly repayment easily.</p>
          </div>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img4} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Affordability calculator</h3>
            <p>Find out how much you can afford.</p>
          </div>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img5} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Find an agent</h3>
            <p>Get help from a professional.</p>
          </div>
          <div className="lg:w-1/3 pb-10 max-sm:w-fit md:w-fit">
            <img src={img6} alt="" className='rounded-lg'/>
            <h3 className='font-black'>Find an attorney</h3>
            <p>Let an attorney assist you.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 place-items-center px-10 bg-neutral-100 py-16 max-sm:flex flex-wrap justify-between ">
        <div className="max-sm:w-1/4">
            <img src={buying} alt="" className='rounded-lg border-2 border-blue-500'/>
            <h3 className='text-center font-medium'>Buying</h3>
        </div>
        <div className="max-sm:w-1/4">
            <img src={renting} alt="" className='rounded-lg border-2 border-yellow-400'/>
            <h3 className='text-center font-medium'>Renting</h3>
        </div>
        <div className="max-sm:w-1/4">
            <img src={selling} alt="" className='rounded-lg border-2 border-green-700'/>
            <h3 className='text-center font-medium'>Selling</h3>
        </div>
        <div className="max-sm:w-fit text-center">
            <h2 className='font-bold pb-5 text-2xl'>No more guessing</h2>
            <p>Whether you’re buying, selling, renting or investing, find useful information in our step by step guides.</p>
            <button className='bg-white px-5 py-2 rounded-lg mt-5 border-2 font-medium '>View all guides</button>
        </div>
      </div>

      <div className="px-10 py-20">
        <h2 className='text-center font-bold text-3xl pb-5'>Subscribe to our newsletter</h2>
        <p className='text-center'>Get the latest property news and advice delivered straight to your inbox.</p>
        <div className="flex justify-center">
            <button className='mt-10 bg-green-500 px-5 py-3 rounded-xl font-medium hover:text-gray-50'>Subscribe</button>
        </div>
      </div>
    </div>
  ) 
}

export default Buy
