import React from 'react'
import './Hero.css'
import crane from '../../assets/CraneVectors/Crane.png';
import trolley from '../../assets/CraneVectors/Trolley.png';
import Goiliath from '../../assets/CraneVectors/Goiliath.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Precision. <br/>Power. <br/>Performance.</h1>
        <p>Leading the Way in Crane Manufacturing</p>
        <button className='btn'>Explore More</button>
      </div>
      {/* <div className='crane-vectors'>
        <img className='image' src={crane} alt=""/>
        <img className='image trolley' src={trolley} alt="" />
        <img className='image' src={Goiliath} alt="" />
      </div> */}
    </div>
  )
}

export default Hero
