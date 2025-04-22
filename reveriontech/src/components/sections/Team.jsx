import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Team = () => {
  // State to track which team member is being hovered
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set component as visible for entrance animations
    setIsVisible(true);
    
    // Add scroll listener for parallax effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || 0.1);
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Team members data with specific social media links for each member
  const teamMembers = [
    {
      id: 1,
      name: "Rod A.",
      position: "Founder",
      image: "images/profile/profile1.jpg",
      socialLinks: {
        facebook: "https://facebook.com/rod.a", // replace with actual link
        linkedin: "https://linkedin.com/in/rod.a", // replace with actual link
        youtube: "https://youtube.com/c/rod.a", // replace with actual link
        instagram: "https://instagram.com/rod.a" // replace with actual link
      }
    },
    {
      id: 2,
      name: "Mhok S.",
      position: "CTO",
      image: "images/profile/profile2.jpg",
      socialLinks: {
        facebook: "https://facebook.com/mhok.s", // replace with actual link
        linkedin: "https://linkedin.com/in/mhok.s", // replace with actual link
        youtube: "https://youtube.com/c/mhok.s", // replace with actual link
        instagram: "https://instagram.com/mhok.s" // replace with actual link
      }
    },
    {
      id: 3,
      name: "Darian S",
      position: "Business Development",
      image: "images/profile/profile3.jpg",
      socialLinks: {
        facebook: "https://facebook.com/darian.s", // replace with actual link
        linkedin: "https://linkedin.com/in/darian.s", // replace with actual link
        youtube: "https://youtube.com/c/darian.s", // replace with actual link
        instagram: "https://instagram.com/darian.s" // replace with actual link
      }
    },
    {
      id: 4,
      name: "Jhon Rexey",
      position: "Frontend Developer",
      image: "images/profile/profile4.jpg",
      socialLinks: {
        facebook: "https://facebook.com/jhon.rexey", // replace with actual link
        linkedin: "https://linkedin.com/in/jhon.rexey", // replace with actual link
        youtube: "https://youtube.com/c/jhon.rexey", // replace with actual link
        instagram: "https://instagram.com/jhon.rexey" // replace with actual link
      }
    },
    {
      id: 5,
      name: "Kent A.",
      position: "Backend Developer",
      image: "images/profile/profile5.jpg",
      socialLinks: {
        facebook: "https://facebook.com/kent.a", // replace with actual link
        linkedin: "https://linkedin.com/in/kent.a", // replace with actual link
        youtube: "https://youtube.com/c/kent.a", // replace with actual link
        instagram: "https://instagram.com/kent.a" // replace with actual link
      }
    },
    {
      id: 6,
      name: "Racker Joy S.",
      position: "Researcher",
      image: "images/profile/profile6.jpg",
      socialLinks: {
        facebook: "https://facebook.com/racker.joy", // replace with actual link
        linkedin: "https://linkedin.com/in/racker.joy", // replace with actual link
        youtube: "https://youtube.com/c/racker.joy", // replace with actual link
        instagram: "https://instagram.com/racker.joy" // replace with actual link
      }
    },
    {
      id: 7,
      name: "WhiteFish",
      position: "Lead Creatives",
      image: "images/profile/profile7.jpg",
      socialLinks: {
        facebook: "https://facebook.com/whitefish", // replace with actual link
        linkedin: "https://linkedin.com/in/whitefish", // replace with actual link
        youtube: "https://youtube.com/c/whitefish", // replace with actual link
        instagram: "https://instagram.com/whitefish" // replace with actual link
      }
    },
    {
      id: 8,
      name: "Jennifer C.",
      position: "CFO",
      image: "images/profile/profile8.jpg",
      socialLinks: {
        facebook: "https://facebook.com/jennifer.c", // replace with actual link
        linkedin: "https://linkedin.com/in/jennifer.c", // replace with actual link
        youtube: "https://youtube.com/c/jennifer.c", // replace with actual link
        instagram: "https://instagram.com/jennifer.c" // replace with actual link
      }
    }
  ];

  // Social media icons mapping
  const socialIcons = {
    facebook: <FaFacebookF />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />
  };

  // Mouse event handlers
  const handleMouseEnter = (memberId) => {
    setHoveredMember(memberId);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.6 
      }
    }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.6 
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#5271ff",
      color: "#fff",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="position-relative py-5" 
      id="team" 
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "80px"
      }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="position-absolute"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #5271ff 0%, #3b5afe 100%)",
          top: "-100px",
          right: "-100px",
          zIndex: 0
        }}
      />
      
      <motion.div 
        className="position-absolute parallax-element"
        data-speed="-0.05"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff5c7c 0%, #ff3c6a 100%)",
          bottom: "-50px",
          left: "-50px",
          zIndex: 0
        }}
      />
      
      <motion.div 
        className="position-absolute parallax-element"
        data-speed="0.03"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          width: "200px",
          height: "200px",
          background: "#000",
          transform: "rotate(45deg)",
          top: "30%",
          right: "15%",
          zIndex: 0
        }}
      />
      
      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i}
          className="position-absolute parallax-element"
          data-speed={0.05 * (Math.random() - 0.5)}
          initial={{ 
            x: Math.random() * 100 - 50, 
            y: Math.random() * 100 - 50, 
            opacity: 0 
          }}
          animate={{ 
            opacity: 0.08
          }}
          transition={{ 
            delay: 0.3 + i * 0.1,
            duration: 0.8
          }}
          style={{
            width: 10 + Math.random() * 30,
            height: 10 + Math.random() * 30,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            transform: Math.random() > 0.5 ? 'rotate(45deg)' : '',
            backgroundColor: Math.random() > 0.5 ? '#5271ff' : '#ff5c7c',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0
          }}
        />
      ))}
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div 
          className="row justify-content-center mb-5"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="col-lg-8 text-center">
            <motion.h2 
              className="mb-3"
              variants={headerVariants}
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                color: '#333',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Our Team
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                style={{ 
                  height: "4px", 
                  backgroundColor: "#5271ff",
                  borderRadius: "2px",
                  marginTop: "10px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </motion.h2>
            <motion.p 
              className="text-muted mx-auto mb-5"
              variants={headerVariants}
              style={{
                fontSize: '1.1rem',
                maxWidth: '700px',
                lineHeight: '1.7'
              }}
            >
              Launch your project and leverage our expertise in designing and 
              managing high-performance, conversion-focused websites.
            </motion.p>
          </div>
        </motion.div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="col-lg-3 col-md-6 col-12" 
              key={member.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
            >
              <div 
                className="bg-white rounded shadow-sm overflow-hidden"
                style={{
                  transition: "all 0.3s ease",
                  transform: hoveredMember === member.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredMember === member.id ? 
                    '0 15px 30px rgba(0,0,0,0.1)' : 
                    '0 5px 15px rgba(0,0,0,0.05)',
                  borderTop: hoveredMember === member.id ? 
                    '3px solid #5271ff' : 
                    '3px solid transparent',
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="text-center p-4"
                >
                  <div className="position-relative mb-4">
                    <img 
                      src={member.image} 
                      className="rounded-circle" 
                      alt={member.name} 
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "5px solid white",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        transform: hoveredMember === member.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    {hoveredMember === member.id && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="position-absolute"
                        style={{
                          width: "130px",
                          height: "130px",
                          borderRadius: "50%",
                          border: "2px solid #5271ff",
                          top: "-5px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: -1
                        }}
                      />
                    )}
                  </div>
                  <h4 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600',
                      marginBottom: '5px',
                      transition: "all 0.3s ease",
                      color: hoveredMember === member.id ? '#5271ff' : '#333'
                    }}
                  >
                    {member.name}
                  </h4>
                  <p 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      marginBottom: '20px'
                    }}
                  >
                    {member.position}
                  </p>
                  
                  {/* Social Links */}
                  <ul className="list-unstyled d-flex justify-content-center mb-0 gap-2">
                    {Object.entries(member.socialLinks).map(([platform, link], i) => (
                      <motion.li key={platform} className="mx-1" variants={socialVariants} whileHover="hover">
                        <a 
                          href={link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: hoveredMember === member.id ? "#f0f0f0" : "#f8f8f8",
                            color: "#666",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.9rem",
                            transition: "all 0.3s ease",
                            boxShadow: hoveredMember === member.id ? 
                              "0 4px 10px rgba(0,0,0,0.1)" : 
                              "none"
                          }}
                          aria-label={platform}
                        >
                          {socialIcons[platform]}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;