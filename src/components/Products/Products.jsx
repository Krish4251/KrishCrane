import React, { useState, useEffect } from "react";
import "./Products.css";
import Product_1 from "../../assets/Product_1.png";
import Product_2 from "../../assets/Product_2.png";
import Product_3 from "../../assets/Product_3.png";
import Product_4 from "../../assets/Product_4.png";
import Product_5 from "../../assets/Product_5.png";
import Product_6 from "../../assets/Product_6.png";
import productHover_1 from "../../assets/productHover_1.png";
import productHover_2 from "../../assets/productHover_2.png";
import productHover_3 from "../../assets/productHover_3.png";
import productHover_4 from "../../assets/productHover_4.png";
import productHover_5 from "../../assets/productHover_5.png";
import productHover_6 from "../../assets/productHover_6.png";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

// Product Data
const productData = [
  {
    id: 1,
    name: "EOT Crane",
    description:
      "At Krish Crane, our EOT (Electric Overhead Traveling) Crane is engineered to deliver unmatched efficiency and durability in heavy-duty lifting operations. Designed for industrial environments such as manufacturing plants, warehouses, and shipyards, our EOT cranes ensure seamless material handling with precision and safety. With a robust steel structure, high-performance motors, and advanced control systems, these cranes maximize productivity while minimizing downtime. With a commitment to quality and innovation, Krish Crane offers customized EOT crane solutions tailored to your specific needs. Our cranes come in single and double girder configurations, equipped with features like variable speed control, anti-sway technology, and remote operation for enhanced efficiency. Whether you need a standard lifting solution or a custom-built crane for specialized applications, our EOT cranes provide the power, reliability, and safety you can trust.",
    baseImg: Product_1,
    hoverImg: productHover_1,
  },
  {
    id: 2,
    name: "Crane Hoist",
    description:
      "The Crane Hoist from Krish Crane is a critical component designed for precision lifting across various industries. Whether integrated into an overhead crane system or used as a standalone lifting mechanism, our hoists provide smooth, efficient, and reliable performance. Engineered with cutting-edge technology, they feature powerful motors, high-load capacity, and user-friendly controls to simplify material handling operations. FAt Krish Crane, we offer both electric and manual hoists, ensuring that our customers get the perfect solution for their lifting needs. Our electric hoists come with advanced features such as overload protection, automatic braking, and remote operation for enhanced safety. Built for durability and seamless performance, our crane hoists are the ideal choice for factories, construction sites, and warehouses looking for dependable and high-efficiency lifting solutions.",
    baseImg: Product_2,
    hoverImg: productHover_2,
  },
  {
    id: 3,
    name: "Goliath Crane",
    description:
      "The Goliath Crane, also known as a gantry crane, is one of Krish Crane’s flagship lifting solutions for large-scale industrial applications. Designed for shipyards, construction projects, and heavy manufacturing, our Goliath cranes offer unmatched strength and stability. Unlike overhead cranes, these cranes are supported by ground-running legs, providing enhanced mobility and adaptability to different work environments. Our Goliath cranes are available in single and double girder configurations, capable of handling extremely heavy loads with precision. Equipped with weather-resistant components, radio remote control, and automated lifting features, they ensure safe and efficient operations in outdoor and indoor environments alike. Whether you need a standard design or a custom-built gantry crane, Krish Crane is committed to delivering the best lifting technology to meet your specific requirements.",
    baseImg: Product_3,
    hoverImg: productHover_3,
  },
  {
    id: 4,
    name: "Jib Crane",
    description:
      "The Jib Crane from Krish Crane is a compact and highly versatile lifting solution designed for precise material handling. With its pivoting arm mechanism, it allows operators to lift and position loads within a defined working radius, making it ideal for workshops, assembly lines, and warehouses. Our Jib cranes are built with high-strength materials and advanced load-bearing technology to ensure long-term durability and efficiency. Krish Crane offers various configurations, including wall-mounted, freestanding, and articulating models, each designed to cater to different operational needs. Whether you require a manual or electric hoist integration, our Jib cranes provide effortless lifting, smooth rotation, and enhanced safety features. Their space-saving design makes them an economical and efficient alternative to larger crane systems, ensuring seamless operation for various industries.",
    baseImg: Product_4,
    hoverImg: productHover_4,
  },
  {
    id: 5,
    name: "Semi-Goliath Crane",
    description:
      "At Krish Crane, our Semi-Goliath Crane is a versatile and space-efficient lifting solution designed to provide the benefits of both gantry and overhead cranes. With one side supported by a ground-mounted rail and the other side running on an elevated runway, this crane offers enhanced flexibility for material handling in factories, workshops, and warehouses. It is ideal for industries where a full gantry crane is not feasible, yet high lifting capacity and mobility are required. Built with precision engineering and durable materials, our Semi-Goliath cranes ensure smooth operation, high load-bearing capacity, and superior safety features. Available in single and double girder configurations, they can be customized to meet specific operational needs. Advanced control systems, radio remote operation, and automated lifting functions make our Semi-Goliath cranes efficient, reliable, and cost-effective. Whether handling heavy machinery, raw materials, or finished products, Krish Crane delivers cutting-edge lifting solutions that optimize workflow and productivity.",
    baseImg: Product_5,
    hoverImg: productHover_5,
  },
  {
    id: 6,
    name: "New Product",
    description:
      "IAs a pioneer in lifting technology, Krish Crane is proud to introduce our latest innovation in material handling. Designed with cutting-edge engineering, our new product integrates advanced automation, intelligent load management, and energy-efficient operation to redefine lifting efficiency. Whether for construction, logistics, or industrial manufacturing, this next-generation lifting solution is built to enhance productivity and safety. Featuring AI-powered load balancing, real-time monitoring, and smart safety mechanisms, our newest offering optimizes operations while reducing risks. With a user-friendly interface, customizable configurations, and seamless integration with existing crane systems, it stands as a testament to Krish Crane’s commitment to innovation, reliability, and customer satisfaction. Experience the future of lifting technology with Krish Crane..",
    baseImg: Product_6,
    hoverImg: productHover_6,
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to move to the next product
  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  // Function to move to the previous product
  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + productData.length) % productData.length
    );
  };

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Rotate products every 5 seconds (if not paused)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextProduct, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="products">
      <Title subTitle="Our Products" title="What We Offer" />

      <div className="products-container">
        {/* Rotating Product Wheel */}
        <div className="product-wheel">
          {productData.map((product, index) => {
            const totalProducts = productData.length;
            const angle =
              (360 / totalProducts) *
              ((index - currentIndex + totalProducts) % totalProducts); // Ensures proper rotation
            const isFocused = index === currentIndex % totalProducts;

            return (
              <div
                key={product.id}
                className={`product-item ${isFocused ? "focused" : ""}`}
                style={{
                  transform: `rotate(${angle}deg) translateX(190px)  rotate(-${angle}deg)`,
                }}
              >
                <img
                  className="base-image"
                  src={product.baseImg}
                  alt={product.name}
                />
                <img className="hover-image" src={product.hoverImg} alt="" />
                <div className="caption">
                  <p>{product.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Details (Title & Description) */}
        <div className="product-details">
          <div className="controls">
            <button onClick={prevProduct}>❮</button>
            <button onClick={togglePause}>{isPaused ? "▶" : "❚❚"}</button>
            <button onClick={nextProduct}>❯</button>
          </div>
          <h2>{productData[currentIndex].name}</h2>
          <p>{productData[currentIndex].description}</p>
          <h6><Link to="/ProductPage">Go to Products</Link></h6>
        </div>
      </div>
    </div>
  );
};

export default Products;
