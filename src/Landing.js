import React from 'react'
import background1 from './assets/m3-homepage-desktop 1.png';
import background2 from './assets/Desktop-ModelY.jpeg';
import background3 from './assets/ms-main-hero-desktop 2.png';
import background4 from './assets/MX-Hero-Desktop 2.png';
import background5 from './assets/_25-HP-SolarPanels-D.jpeg';
import background6 from './assets/Homepage-SolarRoof-Desktop-Global.webp';
import background7 from './assets/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg';
import Footer from './Footer';
import Card from './Card';

export default function Landing() {
  return (
    <>
    <Card background={background1} text="Model 3" description="Leasing starting at $399/mo" leftbtn="Custom Order" rightbtn="Demo Drive" />
    <Card background={background2} text="Model Y" leftbtn="Custom Order" rightbtn="Demo Drive" />
    <Card background={background3} text="Model S" leftbtn="Custom Order" rightbtn="Demo Drive" />
    <Card background={background4} text="Model X" leftbtn="Custom Order" rightbtn="Demo Drive" />
    <Card background={background5} text="Solar Panels" description="Lowest Cost Solar Panels in America" leftbtn="Order Now" rightbtn="Learn More" />
    <Card background={background6} text="Solar Roof" description="Produce Clean Energy From Your Roof" leftbtn="Order Now" rightbtn="Learn More" />
    <Card background={background7} text="Accessories" leftbtn="Shop Now" />
    <Footer />
    </>

  )
}
