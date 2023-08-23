import React from 'react';
import "./Hero.css";
import Flipkart from "../assets/flipkart.png";
import Amazon from "../assets/amazon.png";

function Hero() {
  return (
    <>
        <div className="heroContent">
           <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
          </p>
        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand_image">
             <img src={Flipkart} alt="amazon-logo" />
             <img src={Amazon } alt="flipkart-logo" />
          </div>
        </div>
    </div>
    </>
  )
};

export default Hero;