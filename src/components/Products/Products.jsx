import React from 'react'
import './Products.css'
import Product_1 from '../../assets/Product_1.png'
import Product_2 from '../../assets/Product_2.png'
import Product_3 from '../../assets/Product_3.png'
const Products = () => {
  return (
    <div className='products'>
      <div className="product">
        <img src={Product_1} alt="" />
        <div className="caption">
            <p>EOT Crane</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_2} alt="" />
        <div className="caption">
            <p>Crane Hoist</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_3} alt="" />
        <div className="caption">
            <p>Goliath Crane</p>
        </div>
      </div>
      <button className='btn'>More</button>
    </div>
  )
}

export default Products
