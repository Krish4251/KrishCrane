import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Precision. <br/>Power. <br/>Performance.</h1>
        <p>Leading the Way in Crane Manufacturing</p>
        <button className='btn'>Explore More</button>
        
        
      </div>
      <div className='crane-vectors'>
        <img className='image' src="src\assets\CraneVectors\Girder.png" alt=""/>
        <img className='image trolley' src="src/assets/CraneVectors/Trolley.svg" alt="" />
        <img className='image' src="src\assets\CraneVectors\Goliath Crane.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
