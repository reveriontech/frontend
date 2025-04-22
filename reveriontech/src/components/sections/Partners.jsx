import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Using your existing partner data paths
  const partners = [
    {
      id: 1,
      src: "/images/partnerlogo/dct.png",
      alt: "DCT",
      name: "Lungsod ng Dabaw",
    },
    {
      id: 2,
      src: "/images/partnerlogo/icp-ph.png",
      alt: "ICP-PH",
      name: "ICP Philippines",
    },
    {
      id: 3,
      src: "/images/partnerlogo/nftdavao.png",
      alt: "NFT Davao",
      name: "NFT Davao",
    },
    {
      id: 4,
      src: "/images/partnerlogo/rerdao.png",
      alt: "RERDAO",
      name: "RER DAO",
    },
    {
      id: 5,
      src: "/images/partnerlogo/dct.png",
      alt: "Lungsod ng Dabaw",
      name: "Lungsod ng Dabaw",
    },
    {
      id: 6,
      src: "/images/partnerlogo/icp-ph.png",
      alt: "ICP-PH",
      name: "ICP Philippines",
    },
  ];

  useEffect(() => {
    // Set component as visible for entrance animations
    setIsVisible(true);

    // Add scroll listener for parallax effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || 0.1);
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion animation variants
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    title: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.1,
        },
      },
    },
    text: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.3,
        },
      },
    },
    button: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.5,
        },
      },
      hover: {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(255, 193, 7, 0.4)",
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
      tap: {
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
    },
    logo: {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3 + i * 0.1,
          duration: 0.5,
          ease: "easeOut",
        },
      }),
      hover: {
        y: -5,
        filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.1))",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      },
    },
    shape: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 0.15,
        scale: 1,
        transition: {
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        },
      },
    },
    lineGrow: {
      hidden: { width: 0 },
      visible: {
        width: "80px",
        transition: {
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section
      className="partners-section position-relative d-flex align-items-center"
      id="partners"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="position-absolute"
        initial="hidden"
        animate="visible"
        variants={animations.shape}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffc107 0%, #ff9800 100%)",
          top: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />

      <motion.div
        className="position-absolute parallax-element"
        data-speed="-0.05"
        initial="hidden"
        animate="visible"
        variants={animations.shape}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)",
          bottom: "-50px",
          left: "-50px",
          zIndex: 0,
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
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <motion.div
              className="text-start"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={animations.container}
            >
              <motion.div
                className="text-uppercase mb-2"
                variants={animations.title}
                style={{
                  color: "#6c757d",
                  letterSpacing: "1px",
                  fontSize: "0.9rem",
                }}
              >
                <span className="me-2">TEAM.</span>
                <span className="me-2">CUSTOMER.</span>
                <span>COMMUNITY</span>
              </motion.div>

              <motion.h2
                className="fw-bold mb-3"
                variants={animations.title}
                style={{
                  fontSize: "2.75rem",
                  color: "#333",
                  lineHeight: "1.2",
                }}
              >
                We Work With the
                <br />
                Best Partners
              </motion.h2>

              <motion.div
                className="accent-line mb-4"
                variants={animations.lineGrow}
                style={{
                  height: "4px",
                  backgroundColor: "#ffc107",
                  borderRadius: "2px",
                }}
              />

              <motion.p
                className="mb-4"
                variants={animations.text}
                style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#555" }}
              >
                With an extensive background of past partnership in design
                build, we are very familiar with a number of delivery methods
                and are confident we can find the process that will best help
                you meet your goals.
              </motion.p>

              <motion.div
                variants={animations.button}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="#"
                  className="btn px-4 py-2 text-uppercase fw-bold position-relative overflow-hidden"
                  style={{
                    backgroundColor: "#ffc107",
                    color: "#212529",
                    fontSize: "0.85rem",
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: "2px",
                  }}
                >
                  <span className="position-relative" style={{ zIndex: 2 }}>
                    READ MORE
                  </span>
                  <motion.span
                    className="position-absolute top-0 start-0 w-100 h-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
                      zIndex: 1,
                    }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side logos grid */}
          <div className="col-lg-7">
            <div className="row g-4">
              {partners.map((partner, index) => (
                <div className="col-6 col-md-4" key={partner.id}>
                  <motion.div
                    className="partner-card text-center d-flex flex-column align-items-center"
                    custom={index}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover="hover"
                    variants={animations.logo}
                    style={{
                      padding: "1.5rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      className="logo-wrapper mb-3"
                      style={{
                        height: "90px",
                        width: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="img-fluid"
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p
                      className="mb-0 text-center"
                      style={{
                        fontSize: "0.9rem",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      {partner.name}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute parallax-element"
          data-speed={0.05 * (Math.random() - 0.5)}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0,
          }}
          animate={{
            opacity: 0.08,
          }}
          transition={{
            delay: 0.3 + i * 0.1,
            duration: 0.8,
          }}
          style={{
            width: 10 + Math.random() * 40,
            height: 10 + Math.random() * 40,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            transform: Math.random() > 0.5 ? "rotate(45deg)" : "",
            backgroundColor: Math.random() > 0.5 ? "#ffc107" : "#3f51b5",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
        />
      ))}
    </section>
  );
};

export default React.memo(Partners);
