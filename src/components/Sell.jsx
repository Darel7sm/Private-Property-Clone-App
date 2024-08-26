import React from 'react'
import { CiSearch } from 'react-icons/ci'
import devImage1 from '../assets/devImage1.png'
import devImage2 from '../assets/devImage2.png'
import devImage3 from '../assets/devImage3.png'
import devImage4 from '../assets/devImage4.png'
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import d5 from '../assets/d5.png'
import d6 from '../assets/d6.png'

const Sell = () => {
  return (
    <div className="px-10 my-10">
      <h1 className="text-center font-bold text-3xl pb-10 max-sm:text-lg">
        Development Property for Sale
      </h1>
      <div className="flex justify-between max-sm:grid max-sm:justify-center md:gap-5">
        <div className="max-sm:mb-10">
          <img src={devImage1} alt="" className="rounded-lg" />
          <div className="flex gap-2 place-items-center">
            <CiSearch className="text-green-400" />
            <h3>Western Cape</h3>
          </div>
          <p>48 Developments</p>
        </div>
        <div className="max-sm:mb-10">
          <img src={devImage2} alt="" className="rounded-lg" />
          <div className="flex gap-2 place-items-center">
            <CiSearch className="text-green-400" />
            <h3>Gauteng</h3>
          </div>
          <p>139 Developments</p>
        </div>
        <div className="max-sm:mb-10">
          <img src={devImage3} alt="" className="rounded-lg" />
          <div className="flex gap-2 place-items-center">
            <CiSearch className="text-green-400" />
            <h3>KwaZulu Natal</h3>
          </div>
          <p>16 Developments</p>
        </div>
        <div className="max-sm:mb-10">
          <img src={devImage4} alt="" className="rounded-lg" />
        </div>
      </div>
      <p className="text-center py-12">
        South Africa is constantly advancing and one of the areas most evident
        of this growth is the development property sector. There are many
        reasons for the increased number in development property for sale across
        various neighbourhoods, including:
      </p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 max-sm:grid max-sm:justify-center md:grid md:grid-cols-2 md:gap-5">
        <div className="pb-10 max-sm:w-fit md:w-fit ">
          <div className="flex justify-center">
            <img src={d1} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">
            Financial Savings
          </h2>
          <p className="text-center">
            with a development property, VAT is included in the price and
            transaction costs are paid by the developer.
          </p>
        </div>
        <div className="pb-10 max-sm:w-fit md:w-fit">
          <div className="flex justify-center">
            <img src={d2} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">
            Maintenance
          </h2>
          <p className="text-center">
            investing in a new development property means you save on
            maintenance costs for years and aren’t having to upgrade the home
            through DIY projects.
          </p>
        </div>
        <div className="pb-10 max-sm:w-fit md:w-fit">
          <div className="flex justify-center">
            <img src={d3} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">
            Personalised
          </h2>
          <p className="text-center">
            all the finishes and layout are completed for your particular tastes
            so you’re not having to adjust to someone else’s selections.
          </p>
        </div>
        <div className="pb-10 max-sm:w-fit md:w-fit">
          <div className="flex justify-center">
            <img src={d4} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">Security</h2>
          <p className="text-center">
            undoubtedly one of the biggest sale features of a development
            property is the elevated level of safety and security.
          </p>
        </div>
        <div className="pb-10 max-sm:w-fit md:w-fit">
          <div className="flex justify-center">
            <img src={d5} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">
            Regulations
          </h2>
          <p className="text-center">
            the strict regulations with regards to maintenance, pets and overall
            conduct make development properties valuable assets.
          </p>
        </div>
        <div className="pb-10 max-sm:w-fit md:w-fit">
          <div className="flex justify-center">
            <img src={d6} alt="" className="rounded-xl" />
          </div>
          <h2 className="text-center font-bold text-2xl pt-2 pb-5">
            Developed for the future
          </h2>
          <p className="text-center">
            property developments are designed with future technology
            capabilities in mind.
          </p>
        </div>
      </div>

      <p className="text-center py-12">
        If you’re considering investing in a development property, it’s best to
        get in early on so that you maximise your profits. Developers will
        usually offer great deals early which means growth in investment value
        by the time the property is built. You also have the opportunity to
        choose the best property placements for the highest capital
        appreciation. <br /><br /> When researching development property for sale, Private
        Property is the first-stop portal featuring all the best in South
        Africa’s development property across all nine provinces. Whether you’re
        looking to invest in a property development or are a developer looking
        to feature your property, we have the right advice for you.
      </p>

      <div className='flex justify-between pt-10 pb-20 max-sm:grid md:gap-5'>
        <div className='bg-gray-200 p-5 rounded-xl max-sm:mb-10'>
            <h2 className='text-center font-bold text-2xl'>Advertise Your Development</h2>
            <p className='text-center pt-3 pb-5'>List your property development on Private Property for maximum exposure.</p>
            <div  className='flex justify-center'>
                <button className='bg-black p-1 text-white rounded-lg px-4 hover:text-green-400'>List Your Development</button>
            </div>
        </div>
        <div className='bg-gray-200 p-5 rounded-2xl'>
            <h2 className='text-center font-bold text-2xl'>Developments Newsletter</h2>
            <p className='text-center pt-3 pb-5'>Get the latest news and expert opinion on development properties.</p>
            <div className='flex justify-center'>
                <button className='bg-green-400 p-1 rounded-lg px-4 hover:text-slate-50'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sell
