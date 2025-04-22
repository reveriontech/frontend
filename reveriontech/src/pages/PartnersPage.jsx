import React, { useEffect } from 'react';
import AOS from 'aos';
import Partners from '../components/sections/Partners';
import HeaderPartners from '../components/sections/HeaderPartners';

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
        <HeaderPartners />
        <Partners />
    </div>
  );
};

export default ContactPage;