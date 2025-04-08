import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import AuthModal from '../sections/AuthModal';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  const navbarCollapseRef = useRef(null);
  const isScrollingRef = useRef(false);
  
  // Check if we're in mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Handle navbar sticky on scroll and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      
      if (!isScrollingRef.current) {
        updateActiveSection();
      }
    };
    
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'offer', 'team', 'price', 'contact', 'partners'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const offset = 150;
        return rect.top <= offset && rect.bottom >= offset;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  // Initialize Bootstrap collapse
  useEffect(() => {
    $(document).on('click', function(e) {
      if (
        !$(e.target).closest('.navbar-collapse').length &&
        !$(e.target).closest('.navbar-toggler').length &&
        $(navbarCollapseRef.current).hasClass('show')
      ) {
        $(navbarCollapseRef.current).collapse('hide');
        setMenuOpen(false);
      }
    });
    
    return () => {
      $(document).off('click');
    };
  }, []);
  
  // Force update of all nav links whenever isSticky or activeSection changes
  useEffect(() => {
    const updateNavLinks = () => {
      if (isScrollingRef.current) return;
      
      const navLinks = document.querySelectorAll('.custom-nav-link');
      if (navLinks && navLinks.length > 0) {
        navLinks.forEach(link => {
          const sectionId = link.getAttribute('href').substring(1);
          const isCurrentActive = sectionId === activeSection;
          
          if (sectionId === 'project') {
            return;
          }
          
          if (isCurrentActive) {
            link.setAttribute('style', `color: #FCD581 !important; border-bottom: 2px solid #FCD581; padding-bottom: 2px;`);
          } else {
            if (isMobile) {
              link.setAttribute('style', 'color: #ffffff !important; border-bottom: none; padding-bottom: 0;');
            } else {
              link.setAttribute('style', `color: ${isSticky ? '#535353' : '#ffffff'} !important; border-bottom: none; padding-bottom: 0;`);
            }
          }
        });
      }
    };
    
    updateNavLinks();
    const intervalId = setInterval(updateNavLinks, 250);
    
    return () => clearInterval(intervalId);
  }, [isSticky, activeSection, isMobile]);
  
  // Smooth scroll to sections
  const scrollToSection = (elementId, e) => {
    e.preventDefault();
    isScrollingRef.current = true;
    
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setActiveSection(elementId);
        isScrollingRef.current = false;
      }, 600);
      
      if ($(navbarCollapseRef.current).hasClass('show')) {
        $(navbarCollapseRef.current).collapse('hide');
        setMenuOpen(false);
      }
    }
  };
  
  const isActive = (section) => activeSection === section;
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const getBackgroundColor = () => {
    return isMobile ? '#353535' : (isSticky ? '#ffffff' : 'transparent');
  };
  
  const openLoginModal = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
    
    if ($(navbarCollapseRef.current).hasClass('show')) {
      $(navbarCollapseRef.current).collapse('hide');
      setMenuOpen(false);
    }
  };
  
  const openSignupModal = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
    
    if ($(navbarCollapseRef.current).hasClass('show')) {
      $(navbarCollapseRef.current).collapse('hide');
      setMenuOpen(false);
    }
  };
  
  const closeAuthModal = () => setIsAuthModalOpen(false);
  
  const handleLogout = () => {
    logout();
    
    if ($(navbarCollapseRef.current).hasClass('show')) {
      $(navbarCollapseRef.current).collapse('hide');
      setMenuOpen(false);
    }
  };
  
  return (
    <>
      <nav 
        style={{ 
          backgroundColor: getBackgroundColor(),
          transition: 'background-color 0.3s ease',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
          padding: '10px 0',
          boxShadow: isSticky && !isMobile ? '0 2px 10px rgba(0, 0, 0, 0.23)' : 'none'
        }} 
        className="navbar navbar-expand-lg fixed-top navbar-custom"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src={isSticky ? "/images/ReverionTechLogo-dark.png" : "/images/ReverionTechLogo-white.png"} 
              className="navbar-image" 
              alt="Logo" 
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarCollapse" 
            aria-controls="navbarCollapse" 
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse" ref={navbarCollapseRef}>
            <ul className="navbar-nav ms-auto mb-0 mb-lg-0 align-items-center">
              <li className={`nav-item ${isActive('home') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#home" 
                  onClick={(e) => scrollToSection('home', e)}
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${isActive('about') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#about" 
                  onClick={(e) => scrollToSection('about', e)}
                >
                  About us
                </a>
              </li>
              <li className={`nav-item ${isActive('offer') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#offer" 
                  onClick={(e) => scrollToSection('offer', e)}
                >
                  Services
                </a>
              </li>
              <li className={`nav-item ${isActive('team') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#team" 
                  onClick={(e) => scrollToSection('team', e)}
                >
                  Team
                </a>
              </li>
              <li className={`nav-item ${isActive('price') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#price" 
                  onClick={(e) => scrollToSection('price', e)}
                >
                  Solutions
                </a>
              </li>
              <li className={`nav-item ${isActive('partners') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#partners" 
                  onClick={(e) => scrollToSection('partners', e)}
                >
                  Partners
                </a>
              </li>
              <li className={`nav-item ${isActive('contact') ? 'active' : ''}`}>
                <a 
                  className="nav-link custom-nav-link" 
                  href="#contact" 
                  onClick={(e) => scrollToSection('contact', e)}
                >
                  Contact
                </a>
              </li>
              
              {user ? (
                <li className={`button--form ${isSticky ? 'sticky' : ''} ms-lg-2`}>
                  <div 
                    className={`login--button ${isSticky && !isMobile ? 'sticky' : ''}`}
                    onClick={handleLogout}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <FaUser />
                    Log Out
                  </div>
                </li>
              ) : (
                <li className={`button--form ${isSticky ? 'sticky' : ''} ms-lg-2`} style={{marginLeft: "auto"}}>
                  <div 
                    className={`login--button ${isSticky && !isMobile ? 'sticky' : ''}`}
                    onClick={openLoginModal}
                  >
                    Log In
                  </div>
                  <div 
                    className='sign--button'
                    onClick={openSignupModal}
                  >
                    Sign Up
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      
      {!user && (
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={closeAuthModal} 
          initialMode={authMode} 
        />
      )}
    </>
  );
};

export default Navbar;