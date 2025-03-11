import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Title from './components/Title/Title'
import About from './components/About/About'
// import Plant from './components/Plant/Plant'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
// import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  // const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        
        <About/>
        <Title subTitle='Our Products' title='What We Offer'/>
        <Products/>
        <Title subTitle='Our Services' title='Repair & Maintainance'/>
        <Services/>       
      </div>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <hr/>
      <div className="container"><Footer/></div>
    </div>
  )
}

export default App
