import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import AuthModal from '../sections/AuthModal';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context
  
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Auth modal states
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  
  const navbarCollapseRef = useRef(null);
  const isScrollingRef = useRef(false);
  
  // Check if we're in mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Handle navbar sticky on scroll and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Track sticky state
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      // Only update active section if not in the middle of a programmatic scroll
      if (!isScrollingRef.current) {
        updateActiveSection();
      }
    };
    
    // Function to determine which section is currently in view
    const updateActiveSection = () => {
      // Define all section IDs
      const sections = ['home', 'about', 'offer', 'team', 'price', 'contact', 'project'];
      
      // Find which section is currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        // Consider a section in view if its top is near the top of the viewport
        // The offset values can be adjusted based on your layout
        const offset = 150; // Adjust based on your navbar height and desired sensitivity
        return rect.top <= offset && rect.bottom >= offset;
      });
      
      // Only update state if we have a new active section
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Invoke immediately to set initial states correctly
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  // Initialize Bootstrap collapse
  useEffect(() => {
    // Close navbar collapse when clicking outside
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
    
    // Clean up
    return () => {
      $(document).off('click');
    };
  }, []);
  
  // Force update of all nav links whenever isSticky or activeSection changes
  useEffect(() => {
    const updateNavLinks = () => {
      // Skip style updates if we're in the middle of programmatic scrolling
      if (isScrollingRef.current) return;
      
      const navLinks = document.querySelectorAll('.custom-nav-link');
      if (navLinks && navLinks.length > 0) {
        navLinks.forEach(link => {
          const sectionId = link.getAttribute('href').substring(1);
          const isCurrentActive = sectionId === activeSection;
          
          // We'll handle the project button separately with inline styles
          if (sectionId === 'project') {
            return;
          }
          
          // Apply styles based on active state and sticky state for regular links
          if (isCurrentActive) {
            link.setAttribute('style', `color: #FCD581 !important; border-bottom: 2px solid #FCD581; padding-bottom: 2px;`);
          } else {
            // For mobile always keep text white
            if (isMobile) {
              link.setAttribute('style', 'color: #ffffff !important; border-bottom: none; padding-bottom: 0;');
            } else {
              link.setAttribute('style', `color: ${isSticky ? '#535353' : '#ffffff'} !important; border-bottom: none; padding-bottom: 0;`);
            }
          }
        });
      }
    };
    
    // Run immediately
    updateNavLinks();
    
    // Set up a small interval to ensure styles are applied, but at a lower frequency
    const intervalId = setInterval(updateNavLinks, 250);
    
    // Cleanup the interval on component unmount or when dependencies change
    return () => clearInterval(intervalId);
  }, [isSticky, activeSection, isMobile]);
  
  // Smooth scroll to sections
  const scrollToSection = (elementId, e) => {
    e.preventDefault();
    
    // Set scrolling flag to prevent color flash
    isScrollingRef.current = true;
    
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Wait for scrolling to finish before updating active section
      setTimeout(() => {
        setActiveSection(elementId);
        isScrollingRef.current = false;
      }, 600); // Adjust time based on your scroll duration
      
      // Close mobile menu
      if ($(navbarCollapseRef.current).hasClass('show')) {
        $(navbarCollapseRef.current).collapse('hide');
        setMenuOpen(false);
      }
    }
  };
  
  // Check if a section is active
  const isActive = (section) => {
    return activeSection === section;
  };
  
  // Toggle menu in mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Function to determine background color based on scroll position and screen size
  const getBackgroundColor = () => {
    // For mobile devices, always use dark background
    if (isMobile) {
      return '#353535';
    }
    // For larger screens, use the sticky logic
    return isSticky ? '#ffffff' : 'transparent';
  };
  
  // Open auth modal for login
  const openLoginModal = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
    
    // Close mobile menu if open
    if ($(navbarCollapseRef.current).hasClass('show')) {
      $(navbarCollapseRef.current).collapse('hide');
      setMenuOpen(false);
    }
  };
  
  // Open auth modal for signup
  const openSignupModal = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
    
    // Close mobile menu if open
    if ($(navbarCollapseRef.current).hasClass('show')) {
      $(navbarCollapseRef.current).collapse('hide');
      setMenuOpen(false);
    }
  };
  
  // Close auth modal
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };
  
  // Handle logout with auth context
  const handleLogout = () => {
    logout();
    
    // Close mobile menu if open
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
            <img src="/images/1Logo-Reverion.png" className="navbar-image" alt="Logo" />
            <div style={{ color: isMobile ? '#ffffff' : (isSticky ? '#212529' : '#ffffff') }} className="navbar-brand navbar-title">
              REVERION<span style={{ color: isMobile ? '#ffffff' : (isSticky ? '#212529' : '#ffffff') }} className="navbar-brand navbar-span">TECH</span>
            </div>
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
            {/* Use react-icons for the toggle button */}
            {menuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
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
                // Show logout button if user is logged in
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
                // Show login/signup buttons if no user
                <li className={`button--form ${isSticky ? 'sticky' : ''} ms-lg-2`}>
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
      
      {/* Only render Auth Modal if user is not logged in */}
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