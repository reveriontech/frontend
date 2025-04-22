import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaRocket, FaGlobe } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(82, 113, 255, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className="position-relative py-5 d-flex align-items-center"  
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
        overflow: "hidden"
      }} 
      id="about"
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
          top: "20%",
          left: "15%",
          zIndex: 0
        }}
      />
      
      {/* Floating decorative elements */}
      {[...Array(5)].map((_, i) => (
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
            width: 10 + Math.random() * 40,
            height: 10 + Math.random() * 40,
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
          className="row justify-content-between align-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <div className="col-lg-6">
            <motion.div variants={itemVariants}>
              <h3 className="mb-3 position-relative" style={{ fontSize: '36px', fontWeight: '700', color: '#333' }}>
                Why Choose Reverion Tech
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  style={{ 
                    height: "4px", 
                    backgroundColor: "#5271ff",
                    borderRadius: "2px",
                    marginTop: "12px"
                  }}
                />
              </h3>
            </motion.div>

            <motion.div 
              className="d-flex mb-4 align-items-start" 
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="me-3">
                <div className="d-flex justify-content-center align-items-center rounded-circle shadow-sm" 
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       backgroundColor: '#5271ff',
                       boxShadow: '0 4px 10px rgba(82, 113, 255, 0.25)'
                     }}>
                  <FaHandshake className="text-white" size={20} />
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                padding: '15px', 
                borderRadius: '10px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}>
                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  When you partner with us, you gain more than a service provider—you 
                  gain a dedicated technology ally committed to your success.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="d-flex mb-4 align-items-start" 
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="me-3">
                <div className="d-flex justify-content-center align-items-center rounded-circle shadow-sm" 
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       backgroundColor: '#ff5c7c',
                       boxShadow: '0 4px 10px rgba(255, 92, 124, 0.25)'
                     }}>
                  <FaRocket className="text-white" size={20} />
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                padding: '15px', 
                borderRadius: '10px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}>
                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Our blend of technical excellence, industry knowledge, and client-focused 
                  approach has helped hundreds of organizations achieve their digital ambitions.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="d-flex mb-4 align-items-start" 
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="me-3">
                <div className="d-flex justify-content-center align-items-center rounded-circle shadow-sm" 
                     style={{ 
                       width: '45px', 
                       height: '45px', 
                       backgroundColor: '#4caf50',
                       boxShadow: '0 4px 10px rgba(76, 175, 80, 0.25)'
                     }}>
                  <FaGlobe className="text-white" size={20} />
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                padding: '15px', 
                borderRadius: '10px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}>
                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Our roots in the Philippines give us a unique perspective and enable us 
                  to deliver premium solutions with exceptional value. We combine global 
                  best practices with local insights to create technology that resonates 
                  with users worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mt-5 p-4" 
              variants={itemVariants}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: '10px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h3 className="h4 mb-3" style={{ fontWeight: '600', color: '#333' }}>Let's Build Something Amazing Together</h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Whether you're looking to harness the power of blockchain, implement AI-driven 
                solutions, or transform your data into actionable insights, Reverion Tech has 
                the expertise, experience, and enthusiasm to make it happen.
              </p>
              <div className="d-flex gap-3 buttonContainer">
                <motion.a 
                  href="https://calendly.com/reveriontech?package=${plan.name}"
                  className="btn btn-primary position-relative overflow-hidden"
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    backgroundColor: '#5271ff', 
                    border: 'none', 
                    padding: '10px 20px',
                    fontWeight: '500'
                  }}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="position-relative" style={{ zIndex: 2 }}>Book Us A Call</span>
                  <motion.span 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
                      zIndex: 1
                    }}
                  />
                </motion.a>
                <motion.a 
                  href="#offer"
                  className="btn btn-outline-secondary"
                  style={{ fontWeight: '500' }}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Services
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-5 img-container">
            <motion.div 
              className="position-relative rounded overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                border: '5px solid white'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team Collaboration" 
                className="img-fluid rounded"
              />
              <div className="position-absolute top-0 left-0 w-100 h-100 rounded" 
                   style={{ background: 'linear-gradient(135deg, rgba(82, 113, 255, 0.6) 0%, rgba(255, 92, 124, 0.6) 100%)' }}>
              </div>
              <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                <div className="p-3 rounded" style={{ 
                  backgroundColor: 'rgba(0,0,0,0.3)', 
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <h4 className="h5 mb-2">Start Your Digital Transformation</h4>
                  <p className="small mb-0">Book a call us today to begin your journey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;