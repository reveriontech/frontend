import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isSubmitting: false
  });
  
  // Animation controls for scroll reveal
  const controls = useAnimation();
  
  useEffect(() => {
    // Start animations when component mounts
    controls.start("visible");
    
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
  }, [controls]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill all required fields.',
        isSuccess: false,
        isSubmitting: false
      });
      return;
    }
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isSuccess: true,
        isSubmitting: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        message: 'Oops! Something went wrong. Please try again later.',
        isSuccess: false,
        isSubmitting: false
      });
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  const contactCardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
    marginBottom: '10px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    border: '1px solid #f5f5f5',
    position: 'relative',
    zIndex: 2
  };

  const iconCircleStyle = {
    backgroundColor: '#faa307',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    boxShadow: '0 2px 8px rgba(250, 163, 7, 0.3)'
  };

  return (
    <section 
      className="contact-section position-relative d-flex align-items-center" 
      id="contact" 
      style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "60px 0", 
        minHeight: "80vh",
        overflow: "hidden"
      }}
    >
      {/* Background decorative elements - similar to Partners component */}
      <motion.div 
        className="position-absolute"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #faa307 0%, #ff9800 100%)",
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
          background: "linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)",
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
            backgroundColor: Math.random() > 0.5 ? '#faa307' : '#3f51b5',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-5">
          <div className="col-lg-6">
            <motion.div initial="hidden" animate={controls} variants={containerVariants} className="pe-lg-4" viewport={{ once: true, amount: 0.3 }}>
              <motion.h2 variants={itemVariants} className="mb-4"
                style={{ 
                  fontSize: '42px', 
                  fontWeight: '700', 
                  color: '#333',
                  position: 'relative'
                }}
              >
                We Love Talking To Visionaries Like You.
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  style={{ 
                    height: "4px", 
                    backgroundColor: "#faa307",
                    borderRadius: "2px",
                    marginTop: "15px"
                  }}
                />
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="mb-4"
                style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.7',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                If you have an idea in mind, feel free to reach out by submitting the form below to schedule a discovery call with us.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="mb-5"
                style={{
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.7',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                We build cutting-edge digital solutions—from AI and Web3 to e-commerce and DevOps—that give your brand the edge in a tech-first world.
              </motion.p>
              
              {/* Updated Contact Info Cards */}
              <motion.div variants={itemVariants} className="mb-2">
                <div 
                  style={contactCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={iconCircleStyle}>
                    <FaMapMarkerAlt size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px 0', letterSpacing: '0.5px' }}>PRODUCTION OFFICE</h5>
                    <p style={{ fontSize: '12px', color: '#666', margin: '0 0 1px 0', lineHeight: '1.3' }}>Davao City Philippines</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-2">
                <div 
                  style={contactCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={iconCircleStyle}>
                    <FaPhone size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px 0', letterSpacing: '0.5px' }}>PHONE NUMBER</h5>
                    <p style={{ fontSize: '12px', color: '#666', margin: '0 0 1px 0', lineHeight: '1.3' }}>+63-82-2820645</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-2">
                <div 
                  style={contactCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={iconCircleStyle}>
                    <FaEnvelope size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px 0', letterSpacing: '0.5px' }}>EMAIL</h5>
                    <p style={{ fontSize: '12px', color: '#666', margin: 0, lineHeight: '1.3' }}>connect@reveriontech.com</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div 
              className="card border-0 shadow"
              initial="hidden"
              animate={controls}
              variants={formVariants}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                borderRadius: '15px',
                padding: '35px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                marginTop: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                zIndex: 2
              }}
            >
              {formStatus.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`alert ${formStatus.isSuccess ? 'alert-success' : 'alert-danger'} mb-4`}
                  style={{ fontSize: '14px' }}
                >
                  {formStatus.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="form-label" style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{ 
                      padding: '12px 15px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }}
                  />
                </motion.div>
                
                <div className="row mb-4">
                  <motion.div 
                    className="col-md-6"
                    variants={itemVariants}
                  >
                    <label htmlFor="email" className="form-label" style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      style={{ 
                        padding: '12px 15px',
                        fontSize: '14px',
                        borderRadius: '8px',
                        border: '1px solid #eee',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="col-md-6"
                    variants={itemVariants}
                  >
                    <label htmlFor="phone" className="form-label" style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text" style={{ backgroundColor: '#f8f9fa', border: '1px solid #eee', borderRadius: '8px 0 0 8px' }}>+63</span>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        style={{ 
                          padding: '12px 15px',
                          fontSize: '14px',
                          borderRadius: '0 8px 8px 0',
                          border: '1px solid #eee',
                          borderLeft: 'none',
                          backgroundColor: 'rgba(255, 255, 255, 0.8)'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="form-label" style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Message</label>
                  <textarea 
                    className="form-control" 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write Message"
                    style={{ 
                      padding: '12px 15px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      resize: 'none',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }}
                  ></textarea>
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                >
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" style={{ backgroundColor: '#faa307', borderColor: '#faa307' }} />
                    <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>
                      Remember me
                    </label>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="d-grid"
                  variants={itemVariants}
                >
                  <motion.button 
                    type="submit"
                    className="btn btn-lg position-relative overflow-hidden"
                    disabled={formStatus.isSubmitting}
                    style={{ 
                      backgroundColor: '#faa307',
                      color: '#fff',
                      border: 'none',
                      padding: '12px',
                      fontSize: '16px',
                      fontWeight: '600',
                      borderRadius: '8px',
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: '#f99500',
                      boxShadow: '0 4px 10px rgba(250, 163, 7, 0.3)' 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="position-relative" style={{ zIndex: 2 }}>
                      {formStatus.isSubmitting ? 'Sending...' : 'Submit'}
                      {!formStatus.isSubmitting && (
                        <FaPaperPlane size={14} style={{ marginLeft: '8px' }} />
                      )}
                    </span>
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
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;