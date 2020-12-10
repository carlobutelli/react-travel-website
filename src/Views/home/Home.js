import React from 'react';
import '../../App.css';
import HeroSection from '../../Components/heroSection/HeroSection';
import Cards from "../../Components/cards/Cards";
import Footer from "../../Components/footer/Footer";

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