import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import WeddingSection from './WeddingSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

const ComponentsSection = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero/>
      <Gallery />
      <WeddingSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ComponentsSection;
