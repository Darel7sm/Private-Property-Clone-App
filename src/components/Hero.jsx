import React, { useState } from 'react'
import { VscSearch } from 'react-icons/vsc'

const Hero = ({ onSelectComponent }) => {
    const [activeBtn, setActiveBtn] = useState('Buy')

  const handleButton = (componentName) => {
    setActiveBtn(componentName)
    onSelectComponent(componentName)
  }

  return (
    <div className="grid bg-black text-slate-300 pt-5 md:place-content-center">
      <h1 className="text-center font-sans text-3xl mb-5 max-sm:text-xs">
        Find your new home on Private Property
      </h1>
      <div className="flex gap-1 place-content-center px-96 text-slate-950 font-semibold mb-2 max-sm:px-5 max-sm:text-xs">
        <button
          className={`py-1 flex-1 px-7 rounded-sm ${activeBtn === 'Buy' ? 'bg-green-400' : 'bg-white'} max-sm:p-1 max-sm:flex-1`}
          onClick={() => handleButton('Buy')}>
          Buy
        </button>
        <button className={`py-1 flex-1 px-7 rounded-sm ${activeBtn === 'Rent' ? 'bg-green-400' : 'bg-white'} max-sm:p-1 max-sm:flex-1`}
          onClick={() => handleButton('Rent')}>
          Rent
        </button>
        <button className={`py-1 flex-1 px-7 rounded-sm ${activeBtn === 'Sell' ? 'bg-green-400' : 'bg-white'} max-sm:p-1 max-sm:flex-1`}
          onClick={() => handleButton('Sell')}>
          Developments
        </button>
      </div>
      <label htmlFor="" className="flex place-content-center mb-12">
        <input
          type="text"
          className="px-2 py-1 rounded-sm w-1/2 "
          placeholder="Type Suburb or Ref"
        />
        <VscSearch className="bg-green-400 p-2 text-white  size-8" />
      </label>
    </div>
  )
}

export default Hero
