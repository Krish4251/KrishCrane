import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle="Our Products" title="What We Offer" />
        <Products />
        <Title subTitle="Our Services" title="Repair & Maintainance" />
        <Services />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
