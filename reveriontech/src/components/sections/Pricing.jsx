import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Load FontAwesome CSS dynamically and setup parallax effect
  useEffect(() => {
    // Set component as visible for entrance animations
    setIsVisible(true);
    
    // Load FontAwesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
    
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
      document.head.removeChild(link);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {hidden: { opacity: 0 },visible: {opacity: 1,transition: {staggerChildren: 0.1,delayChildren: 0.2}}};
  const headerVariants = {hidden: { y: -20, opacity: 0 },visible: { y: 0, opacity: 1,transition: { type: "spring", stiffness: 300, damping: 20,delay: 0.1}}};
  
  const cardVariants = {hidden: { opacity: 0, y: 20 },visible: (i) => ({opacity: 1,y: 0,transition: {delay: 0.1 * i,duration: 0.5,ease: "easeOut"}}),
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Pricing plans data with benefits-focused approach
  const pricingPlans = [
    {
      id: 1,
      name: "Starter Package",
      isHighlighted: false,
      tagline: "Essential foundation for new ventures",
      color: "#0d6efd", // Primary blue
      benefits: [
        {text: "Perfect for small businesses and startups", icon: "fa-bullseye"},
        {text: "Essential features to establish your digital presence", icon: "fa-globe"},
        {text: "User-friendly interface with minimal learning curve", icon: "fa-mouse-pointer"},
        {text: "Quick implementation and deployment", icon: "fa-bolt"},
        {text: "Email support within 24 hours", icon: "fa-envelope"}
      ]
    },
    {
      id: 2,
      name: "Growth",
      isHighlighted: true,
      tagline: "Accelerate your business expansion",
      color: "#f7b924", // Warning yellow
      benefits: [
        {text: "Ideal for expanding businesses with growing needs", icon: "fa-expand-arrows-alt"},
        {text: "Advanced features to scale your operations", icon: "fa-cogs"},
        {text: "Detailed analytics and reporting capabilities", icon: "fa-chart-bar"},
        {text: "Automation tools to improve efficiency", icon: "fa-magic"},
        {text: "Priority support with dedicated account manager", icon: "fa-headset"},
        {text: "Regular system updates and enhancements", icon: "fa-sync"}
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      isHighlighted: false,
      tagline: "Enterprise-grade solutions for complex needs",
      color: "#0d6efd", // Primary blue
      benefits: [
        {text: "Tailored solutions for large organizations", icon: "fa-puzzle-piece"},
        {text: "Custom feature development to match your workflow", icon: "fa-code"},
        {text: "Advanced security and compliance measures", icon: "fa-shield-alt"},
        {text: "Unlimited users with role-based access control", icon: "fa-users-cog"},
        {text: "24/7 premium support with guaranteed response times", icon: "fa-life-ring"},
        {text: "Quarterly strategy sessions with our experts", icon: "fa-handshake"}
      ]
    }
  ];

  return (
    <section 
      className="position-relative py-5" id="price"style={{backgroundColor: "#f8f9fa",minHeight: "80vh",overflow: "hidden",paddingTop: "80px",paddingBottom: "80px"}}>
      {/* Background decorative elements */}
      <motion.div 
        className="position-absolute"initial={{ opacity: 0, scale: 0.8 }}animate={{ opacity: 0.15, scale: 1 }}transition={{ duration: 1, ease: "easeOut" }}
        style={{width: "400px",height: "400px",borderRadius: "50%",background: "linear-gradient(135deg, #0d6efd 0%, #3b5afe 100%)",top: "-100px", right: "-100px",zIndex: 0}}/>
      
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
          background: "linear-gradient(135deg, #f7b924 0%, #ffc107 100%)",
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
          left: "15%",
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
            backgroundColor: Math.random() > 0.5 ? '#0d6efd' : '#f7b924',
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
          <div className="col-12 text-center">
            <motion.div variants={headerVariants}>
              <div className="mb-4">
                <i className="fas fa-layer-group fa-3x" style={{ color: "#0d6efd" }}></i>
              </div>
              <motion.h2 
                className="mb-3"
                style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  color: '#333',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Solutions That Scale With Your Business
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  style={{ 
                    height: "4px", 
                    backgroundColor: "#0d6efd",
                    borderRadius: "2px",
                    marginTop: "10px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
              </motion.h2>
              <motion.p 
                className="text-muted mx-auto mb-4"
                style={{
                  fontSize: '1.1rem',
                  maxWidth: '700px',
                  lineHeight: '1.7'
                }}
              >
                We offer flexible packages designed to meet your specific needs at any stage of your business journey.
              </motion.p>
              <motion.a 
                href="https://calendly.com/reveriontech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary mt-2 position-relative overflow-hidden"
                style={{
                  padding: "12px 24px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(13, 110, 253, 0.2)",
                  border: "none"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(13, 110, 253, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="position-relative" style={{ zIndex: 2 }}>
                  <i className="fas fa-calendar-check mr-2"></i> Book a Free Consultation
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
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <div className="row g-4">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              className="col-lg-4 col-md-4" 
              key={plan.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
            >
              <div 
                className="card h-100 border-0 overflow-hidden"
                style={{ 
                  boxShadow: plan.isHighlighted 
                    ? "0 15px 30px rgba(247, 185, 36, 0.15)"
                    : "0 10px 25px rgba(0, 0, 0, 0.08)",
                  borderRadius: "12px",
                  transform: plan.isHighlighted ? "scale(1.02)" : "scale(1)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  border: plan.isHighlighted 
                    ? "2px solid rgba(247, 185, 36, 0.3)"
                    : "2px solid rgba(0, 0, 0, 0.05)"
                }}
              >
                <div 
                  className="position-relative"
                  style={{ 
                    height: '130px',
                    background: `linear-gradient(to right, rgba(240, 240, 240, 0.8), ${plan.color} 80%)`,
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                  }}
                >
                  {plan.isHighlighted && (
                    <div 
                      className="recommended-badge" 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '3px 12px',
                        borderRadius: '20px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        zIndex: 2,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className="row h-100 g-0">
                    <div className="col-5 position-relative">
                      <img 
                        src={
                          plan.id === 1 ? "/images/39 Astronaut jumping happy.png" : 
                          plan.id === 2 ? "/images/14 Astronaut typing with fly1.png" : 
                          "/images/27 Astronaut ride a rocket.png"
                        }
                        alt={`${plan.name} illustration`} 
                        className="position-absolute"
                        style={{ 
                          maxHeight: '150px',
                          bottom: '-20px',
                          left: '5px',
                          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                        }}
                      />
                    </div>
                    <div className="col-7 text-start d-flex flex-column justify-content-center pe-3">
                      <h5 className="mb-1 text-uppercase text-white fw-bold">{plan.name}</h5>
                      <p className="mb-0 small text-white opacity-90">{plan.tagline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-body d-flex flex-column p-4">
                  <ul className="list-unstyled text-start" style={{flex: 1}}>
                    {plan.benefits.map((benefit, index) => (
                      <li 
                        className={index > 0 ? "pt-3 mt-3" : ""} 
                        key={index}
                        style={{
                          borderTop: index > 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        }}
                      >
                        <div className="d-flex align-items-start">
                          <div 
                            className="icon-container" 
                            style={{
                              minWidth: "24px", 
                              marginTop: "3px",
                              backgroundColor: plan.color,
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            <i className="fas fa-check" style={{
                              color: "white",
                              fontSize: "12px"
                            }}></i>
                          </div>
                          <span 
                            className="ms-3"
                            style={{
                              fontSize: "0.95rem",
                              color: "#444",
                              lineHeight: "1.5"
                            }}
                          >
                            {benefit.text}
                          </span>
                        </div>
                      </li>
                    ))}
                    {plan.id === 1 && (
                      <li className="pt-3 mt-3 invisible">
                        <div className="d-flex align-items-start">
                          <div className="icon-container" style={{minWidth: "24px"}}>
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <span className="ms-2">Spacer item</span>
                        </div>
                      </li>
                    )}
                  </ul>
                  
                  <div className="mt-auto pt-4">
                    <motion.a 
                      href={`https://calendly.com/reveriontech?package=${plan.name}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn w-100 py-2 position-relative overflow-hidden"
                      style={{
                        backgroundColor: plan.isHighlighted ? plan.color : "transparent",
                        color: plan.isHighlighted ? "white" : plan.color,
                        border: plan.isHighlighted ? "none" : `2px solid ${plan.color}`,
                        borderRadius: "30px",
                        fontWeight: plan.isHighlighted ? "600" : "500",
                        fontSize: "0.95rem",
                        boxShadow: plan.isHighlighted ? `0 4px 15px rgba(247, 185, 36, 0.3)` : "none",
                        padding: "10px 20px"
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: plan.isHighlighted 
                          ? "0 8px 20px rgba(247, 185, 36, 0.3)"
                          : "0 5px 15px rgba(13, 110, 253, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="position-relative" style={{ zIndex: 2 }}>
                        <i className="fas fa-comments me-2"></i> Book Us A Call
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
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;