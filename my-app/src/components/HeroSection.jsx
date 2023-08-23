import React from 'react';
import './HeroSection.css';
import Hero from '../components/Hero';
import ShoeImage from "../assets/shoe_image.png";


function HeroSection() {
  return (
    <div className="hero">
        <Hero />
        <div className="shoe_image">
          <img src={ShoeImage} alt="shoe_image" />
        </div>
      </div>
  );
}

export default HeroSection