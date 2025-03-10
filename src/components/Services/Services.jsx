import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
          <div className="service">
            <img src={Product_1} alt="" />
            <div className="caption">
                <p>Crane 1</p>
            </div>
          </div>
          <div className="service">
            <img src={Product_2} alt="" />
            <div className="caption">
                <p>Crane 2</p>
            </div>
          </div>
          <div className="service">
            <img src={Product_3} alt="" />
            <div className="caption">
                <p>Crane 3</p>
            </div>
          </div>
        </div>
  )
}

export default Services
