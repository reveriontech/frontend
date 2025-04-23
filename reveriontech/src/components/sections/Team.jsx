import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaQuoteLeft } from 'react-icons/fa';

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.team-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      document.querySelectorAll('.team-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Rod A.",
      position: "Founder",
      quote: "Building tomorrow's solutions with today's innovation.",
      image: "images/profile/profile1.jpg",
      socialLinks: {
        facebook: "https://facebook.com/rod.a",
        linkedin: "https://linkedin.com/in/rod.a",
        youtube: "https://youtube.com/c/rod.a",
        instagram: "https://instagram.com/rod.a"
      }
    },
    {
      id: 2,
      name: "Mhok S.",
      position: "CTO",
      quote: "Technology is only as good as the experience it creates.",
      image: "images/profile/profile2.jpg",
      socialLinks: {
        facebook: "https://facebook.com/mhok.s",
        linkedin: "https://linkedin.com/in/mhok.s",
        youtube: "https://youtube.com/c/mhok.s",
        instagram: "https://instagram.com/mhok.s"
      }
    },
    {
      id: 3,
      name: "Darian S.",
      position: "Business Development",
      quote: "Growth happens at the intersection of vision and execution.",
      image: "images/profile/profile3.jpg",
      socialLinks: {
        facebook: "https://facebook.com/darian.s",
        linkedin: "https://linkedin.com/in/darian.s",
        youtube: "https://youtube.com/c/darian.s",
        instagram: "https://instagram.com/darian.s"
      }
    },
    {
      id: 4,
      name: "Jhon Rexey",
      position: "Frontend Developer",
      quote: "Great interfaces are invisible, they just feel right.",
      image: "images/profile/profile4.jpg",
      socialLinks: {
        facebook: "https://facebook.com/jhon.rexey",
        linkedin: "https://linkedin.com/in/jhon.rexey",
        youtube: "https://youtube.com/c/jhon.rexey",
        instagram: "https://instagram.com/jhon.rexey"
      }
    },
    {
      id: 5,
      name: "Kent A.",
      position: "Backend Developer",
      quote: "The best code is invisible, reliable, and empowering.",
      image: "images/profile/profile5.jpg",
      socialLinks: {
        facebook: "https://facebook.com/kent.a",
        linkedin: "https://linkedin.com/in/kent.a",
        youtube: "https://youtube.com/c/kent.a",
        instagram: "https://instagram.com/kent.a"
      }
    },
    {
      id: 6,
      name: "Racker Joy S.",
      position: "Researcher",
      quote: "Research is seeing what everyone else has seen and thinking what no one else has thought.",
      image: "images/profile/profile6.jpg",
      socialLinks: {
        facebook: "https://facebook.com/racker.joy",
        linkedin: "https://linkedin.com/in/racker.joy",
        youtube: "https://youtube.com/c/racker.joy",
        instagram: "https://instagram.com/racker.joy"
      }
    },
    {
      id: 7,
      name: "WhiteFish",
      position: "Lead Creatives",
      quote: "Creativity is intelligence having fun.",
      image: "images/profile/profile7.jpg",
      socialLinks: {
        facebook: "https://facebook.com/whitefish",
        linkedin: "https://linkedin.com/in/whitefish",
        youtube: "https://youtube.com/c/whitefish",
        instagram: "https://instagram.com/whitefish"
      }
    },
    {
      id: 8,
      name: "Jennifer C.",
      position: "CFO",
      quote: "Good financial decisions today create better opportunities tomorrow.",
      image: "images/profile/profile8.jpg",
      socialLinks: {
        facebook: "https://facebook.com/jennifer.c",
        linkedin: "https://linkedin.com/in/jennifer.c",
        youtube: "https://youtube.com/c/jennifer.c",
        instagram: "https://instagram.com/jennifer.c"
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 12,
        duration: 0.7
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    }),
    hover: {
      y: -12,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 0.05 * i,
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    }),
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section 
      className="position-relative py-5" 
      id="team" 
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}
    >
      {/* Decorative Elements */}
      <div className="position-absolute" style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(250,163,7,0.05) 0%, rgba(250,163,7,0.02) 50%, rgba(250,163,7,0.01) 70%, rgba(250,163,7,0) 100%)",
        top: "-250px",
        right: "-250px",
        zIndex: 0
      }} />
      
      <div className="position-absolute" style={{
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(250,163,7,0.05) 0%, rgba(250,163,7,0.02) 50%, rgba(250,163,7,0.01) 70%, rgba(250,163,7,0) 100%)",
        bottom: "-200px",
        left: "-200px",
        zIndex: 0
      }} />
      
      {/* Floating Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i}
          className="position-absolute"
          initial={{ 
            x: Math.random() * 100 - 50, 
            y: Math.random() * 100 - 50, 
            opacity: 0,
            rotate: Math.random() * 180
          }}
          animate={{ 
            opacity: 0.3,
            y: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 180]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8 + Math.random() * 7,
            delay: i * 0.5
          }}
          style={{
            width: 5 + Math.random() * 12,
            height: 5 + Math.random() * 12,
            borderRadius: Math.random() > 0.7 ? '50%' : Math.random() > 0.5 ? '0' : '4px',
            background: `rgba(250, 163, 7, ${0.1 + Math.random() * 0.2})`,
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
          <div className="col-lg-9 text-center">
            <motion.div variants={headerVariants}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#222',
                marginBottom: '20px',
                position: 'relative'
              }}>
                Our Team
              </h2>
              <div style={{ 
                width: "80px", 
                height: "3px", 
                background: "#faa307", 
                margin: "0 auto 30px",
                borderRadius: "2px"
              }}></div>
              <p style={{
                fontSize: '1.1rem',
                maxWidth: '700px',
                lineHeight: '1.8',
                color: '#555',
                margin: '0 auto 20px'
              }}>
                Launch your project and leverage our expertise in designing and managing high-performance, conversion-focused websites.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="col-lg-3 col-md-6 col-12 team-card" 
              key={member.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleCardClick(member.id)}
            >
              <motion.div 
                className="card border-0 h-100"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: activeCard === member.id 
                    ? "0 20px 40px rgba(0,0,0,0.14)" 
                    : "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: activeCard === member.id ? 'translateY(-15px)' : 'translateY(0)',
                  cursor: "pointer"
                }}
              >
                <div style={{ 
                  height: "230px", 
                  overflow: "hidden",
                  position: "relative"
                }}>
                  <div className="position-absolute" style={{
                    inset: 0,
                    background: activeCard === member.id 
                      ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(250,163,7,0.9) 100%)" 
                      : "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)",
                    zIndex: 1,
                    transition: "all 0.4s ease"
                  }} />
                  
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition: "all 0.6s ease",
                      transform: activeCard === member.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  
                  {activeCard === member.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        inset: 0,
                        zIndex: 2,
                        padding: "20px"
                      }}
                    >
                      <div className="text-center text-white">
                        <div style={{ 
                          fontSize: "1.8rem", 
                          color: "rgba(255,255,255,0.3)",
                          marginBottom: "10px"
                        }}>
                          <FaQuoteLeft />
                        </div>
                        <p style={{ 
                          fontSize: "0.95rem",
                          fontStyle: "italic",
                          lineHeight: "1.6"
                        }}>
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeCard !== member.id && (
                    <div className="position-absolute" style={{ 
                      left: "20px",
                      bottom: "15px",
                      zIndex: 2
                    }}>
                      <h5 style={{ 
                        color: '#fff', 
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '0',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {member.name}
                      </h5>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {activeCard !== member.id && (
                      <h6 style={{ 
                        color: "rgb(70, 62, 62)",
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        margin: '0'
                      }}>
                        {member.position}
                      </h6>
                    )}
                    
                    {activeCard === member.id && (
                      <>
                        <h5 style={{ 
                          color: '#222', 
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          margin: '0'
                        }}>
                          {member.name}
                        </h5>
                        <h6 style={{ 
                          color: '#faa307', 
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          margin: '0'
                        }}>
                          {member.position}
                        </h6>
                      </>
                    )}
                  </div>
                  
                  <motion.div
                    className="d-flex gap-2 mt-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          when: "beforeChildren",
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {Object.entries(member.socialLinks).map(([platform, link], i) => (
                      <motion.div 
                        key={platform} 
                        custom={i}
                        variants={socialVariants}
                        whileHover="hover"
                        style={{ zIndex: 1 }}
                      >
                        <a 
                          href={link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "#f5f5f5",
                            color: "#faa307",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.85rem",
                            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                            border: "2px solid transparent"
                          }}
                          aria-label={platform}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#faa307";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f5f5f5";
                            e.currentTarget.style.color = "#faa307";
                            e.currentTarget.style.borderColor = "transparent";
                          }}
                        >
                          {socialIcons[platform]}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;