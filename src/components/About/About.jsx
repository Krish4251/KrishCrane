import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'
import play_icon from '../../assets/Play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About Krish Crane</h3>
            <h2>Engineering Excellence in Crane Manufacturing</h2>
            <p>Experience superior lifting solutions with our state-of-the-art EOT cranes. As a leading manufacturer, we specialize in designing and producing high-performance cranes that ensure efficiency, safety, and durability in material handling operations.</p>  
            <p>With a commitment to innovation, precision engineering, and customer satisfaction, our cranes are built to meet the demands of various industries. Whether you need a standard crane or a customized solution, we provide reliable and robust lifting equipment tailored to your specific requirements.</p>

        </div>

    </div>
  )
}

export default About
