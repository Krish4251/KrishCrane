import React from 'react'
import './Plant.css'
import gallery_1 from '../../assets/gallery1.jpg'
import gallery_2 from '../../assets/gallery2.jpg'
import gallery_3 from '../../assets/gallery3.jpg'
import gallery_4 from '../../assets/gallery4.jpg'
const Plant = () => {
  return (
    <div className="plant">
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Plant
