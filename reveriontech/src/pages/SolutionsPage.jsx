import React, { useEffect } from 'react';
import AOS from 'aos';
import HeaderSolutions from '../components/sections/HeaderSolutions';
import Pricing from '../components/sections/Pricing';

const ContactPage = () => {
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
    <div  style={{ paddingTop: '80px' }}>
        <HeaderSolutions />
        <Pricing />
    </div>
  );
};

export default ContactPage;