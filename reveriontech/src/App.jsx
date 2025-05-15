import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { useAuth } from './context/AuthContext';
import { useResponsiveNavigation } from './utils/responsive-utils'; 

import Home from './pages/Home';
import Portal from './pages/Portal';
import ContactPage from './pages/ContactPage'; 
import AboutusPage from './pages/AboutusPage';
import FaqPage from './pages/FaqPage';
import SolutionsPage from './pages/SolutionsPage';
import PartnersPage from './pages/PartnersPage';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import ChatWidget from './components/sections/ChatWidget';
import MobileMenuButton from './components/common/MobileMenuButton'; 
import HeaderContact from './components/sections/HeaderContact';

function App() {
  const { user } = useAuth();
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useResponsiveNavigation(); 

  const isPortalRoute = 
    location.pathname.includes('/portal') || 
    (location.hash && location.hash.includes('/portal'));

  useEffect(() => {
    console.log("Current location:", location);
    console.log("Is portal route:", isPortalRoute);
    console.log("User status:", user ? "Logged in" : "Not logged in");
    
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, [location, isPortalRoute, user]);
  
  if (user && (isPortalRoute || location.pathname === '/')) {
    return (
      <>
        <MobileMenuButton isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
        <Portal />
      </>
    );
  }

  if (!user && isPortalRoute) {

    return <Navigate to={`/${location.search}`} replace />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<SolutionsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/headercontact" element={<HeaderContact to="/" />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
     <chat-bot platform_id="8cceb92a-71d2-4552-9064-f25e18abaf6b" user_id="4d260943-e198-41db-8b00-80e4deadbe01" chatbot_id="60705a16-dac5-45e3-ad54-4341fce58f47"><a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a></chat-bot><script src="https://cdn.chatsimple.ai/chat-bot-loader.js" defer></script>
      
    </>
  );
}

export default App;
