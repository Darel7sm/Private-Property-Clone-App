import React, { useState } from 'react'
import Hero from '../components/Hero'
import Buy from '../components/Buy'
import Rent from '../components/Rent'
import Sell from '../components/Sell'

const HomePage = () => {
    const [selectedComponent, setSelectedComponent] = useState('Buy')

    const handleSelectedComponent = (componentName) => {
        setSelectedComponent(componentName)
    }
  return (
    <div>
        <Hero onSelectComponent={handleSelectedComponent}/>
        {selectedComponent === 'Buy' && <Buy/>}
        {selectedComponent === 'Rent' && <Rent/>}
        {selectedComponent === 'Sell' && <Sell/>}
    </div>
  )
}

export default HomePage
