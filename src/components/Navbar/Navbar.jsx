import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="container dark-nav">

      <img src={logo} alt="" className="logo" />

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
        <li>
          <Link to="/ProductPage">Products</Link>
        </li>
        <li>
          <Link to="/ServicePage">Services</Link>
        </li>
        <li>
          <Link to="/CareerPage">Careers</Link>
        </li>
        <li>
          <Link to="/AboutPage">About</Link>
        </li>
        <li>
          <Link to="/ContactPage">
            <button className="btn">Contact</button>
          </Link>
        </li>
      </ul>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
