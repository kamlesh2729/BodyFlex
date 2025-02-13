import React from 'react'
import About from "../components/About/About";
import BmiCalc from "../components/BMI/BmiCalc";
import Blog from "../components/Blog/Blog";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";

const Home = () => {
    return (
      <>
        <Hero />
        <About />
        <Featured />
        <ChooseUs />
        <Trainers />
        <Testimonials />
        <Gallery />
        <BmiCalc />
        <Pricing />
        <Blog />
        <CtaBanner />
        <Footer />
      </>
    );
}

export default Home