import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isSubmitting: false
  });
  
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "OUR MAIN OFFICE",
      content: "SoHo 94 Broadway St\nNew York, NY 10001"
    },
    {
      icon: <FaPhone size={24} />,
      title: "PHONE NUMBER",
      content: "234-9876-5400\n888-0123-4567 (Toll Free)"
    },
    {
      icon: <FaFax size={24} />,
      title: "FAX",
      content: "1-234-567-8900"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "EMAIL",
      content: "hello@theme.com"
    }
  ];
  
  return (
    <section style={{ 
      backgroundColor: "#ffffff", 
      padding: "80px 0 40px",
      minHeight: "calc(100vh - 120px)"
    }} id="contact">
      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-5">
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#333', 
            marginBottom: '5px',
            position: 'relative',
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            CONTACT US
            <div style={{ 
              height: '4px', 
              width: '100%', 
              background: '#faa307', 
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              boxShadow: '0 3px 8px rgba(250, 163, 7, 0.3)'
            }}></div>
          </h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: '25px auto 0', 
            color: '#666',
            fontSize: '16px',
            lineHeight: '1.7'
          }}>
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
        </motion.div>

        <div className="row justify-content-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="col-lg-6">
            <div className="row">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="col-md-6 mb-4"
                  variants={itemVariants}
                >
                  <div 
                    style={{ 
                      background: '#fff', 
                      borderRadius: '4px', 
                      padding: '30px 20px',
                      height: '100%',
                      textAlign: 'center',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05), 0 3px 8px rgba(250, 163, 7, 0.07)',
                      border: '1px solid #f5f5f5',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <motion.div 
                      style={{ 
                        color: '#fff', 
                        marginBottom: '15px',
                        backgroundColor: '#faa307',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: '0 5px 15px rgba(250, 163, 7, 0.25)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h6 style={{ 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      marginBottom: '10px', 
                      color: '#333',
                      textTransform: 'uppercase'
                    }}>
                      {item.title}
                    </h6>
                    <p style={{ 
                      margin: 0, 
                      color: '#666', 
                      whiteSpace: 'pre-line', 
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="col-lg-6"
            variants={itemVariants}
          >
            <motion.div 
              className="card border-0 p-4"
              style={{
                boxShadow: '0 8px 20px rgba(0,0,0,0.05), 0 6px 12px rgba(250, 163, 7, 0.08)',
                borderRadius: '4px',
                marginBottom: '30px'
              }}
            >
              <div className="card-body p-2">
                <h3 style={{ 
                  fontSize: '22px', 
                  textAlign: 'center', 
                  marginBottom: '25px',
                  color: '#333',
                  position: 'relative'
                }}>
                  SEND A MESSAGE
                </h3>

                {formStatus.message && (
                  <motion.div 
                    className={`alert ${formStatus.isSuccess ? 'alert-success' : 'alert-danger'} mb-4`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="input-group" style={{ boxShadow: '0 2px 6px rgba(250, 163, 7, 0.15)' }}>
                      <span className="input-group-text" style={{ background: '#faa307', border: 'none' }}>
                        <FaUser className="text-white" />
                      </span>
                      <input 
                        type="text" 
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        style={{ 
                          padding: '12px 15px',
                          border: '1px solid #eee',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="input-group" style={{ boxShadow: '0 2px 6px rgba(250, 163, 7, 0.15)' }}>
                      <span className="input-group-text" style={{ background: '#faa307', border: 'none' }}>
                        <FaEnvelope className="text-white" />
                      </span>
                      <input 
                        type="email" 
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter a valid email address"
                        style={{ 
                          padding: '12px 15px',
                          border: '1px solid #eee',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <textarea 
                      name="message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows="5"
                      style={{ 
                        padding: '12px 15px',
                        border: '1px solid #eee',
                        fontSize: '14px',
                        resize: 'none',
                        boxShadow: '0 2px 6px rgba(250, 163, 7, 0.15)'
                      }}
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <motion.button 
                      type="submit"
                      className="btn"
                      disabled={formStatus.isSubmitting}
                      style={{ 
                        backgroundColor: '#faa307',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 30px',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 12px rgba(250, 163, 7, 0.3)'
                      }}
                      whileHover={{ 
                        backgroundColor: '#f99500',
                        boxShadow: '0 6px 15px rgba(250, 163, 7, 0.4)' 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        SUBMIT MESSAGE
                        <FaPaperPlane size={12} />
                      </div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-4"
          variants={itemVariants}
          style={{
            color: '#888',
            fontSize: '13px',
            paddingTop: '20px'
          }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;