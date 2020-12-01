import React from 'react';
import '../../App.css';
import HeroSection from '../heroSection/HeroSection';
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer/>
    </>
  )
}

export default Home;