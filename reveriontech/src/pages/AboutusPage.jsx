import React, { useEffect } from 'react';
import AOS from 'aos';
import About from '../components/sections/About';
import HeaderAboutus from '../components/sections/HeaderAboutus';
import Team from '../components/sections/Team';
import SecondCta from '../components/sections/SecondCta';

const AboutusPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <HeaderAboutus />
      <About />
      <SecondCta />
      <Team />
    </div>
  );
};

export default AboutusPage;