import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Team = () => {
  // State to track which team member is being hovered
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
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
        instagram: "https://instagram.com/rod.a", // replace with actual link
      },
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
        instagram: "https://instagram.com/mhok.s", // replace with actual link
      },
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
        instagram: "https://instagram.com/darian.s", // replace with actual link
      },
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
        instagram: "https://instagram.com/jhon.rexey", // replace with actual link
      },
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
        instagram: "https://instagram.com/kent.a", // replace with actual link
      },
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
        instagram: "https://instagram.com/racker.joy", // replace with actual link
      },
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
        instagram: "https://instagram.com/whitefish", // replace with actual link
      },
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
        instagram: "https://instagram.com/jennifer.c", // replace with actual link
      },
    },
  ];

  // Social media icons mapping
  const socialIcons = {
    facebook: <FaFacebookF />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
  };

  // Mouse event handlers
  const handleMouseEnter = (memberId) => {
    setHoveredMember(memberId);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <section
      className="section position-relative"
      id="team"
      style={{
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
        minHeight: "80vh",
        padding: "60px 0",
      }}
    >
      {/* Background decorative elements - only adding the background, keeping current design */}
      <motion.div
        className="position-absolute"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)",
          top: "-100px",
          right: "-100px",
          zIndex: 0,
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
          background: "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
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

      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
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
            backgroundColor: Math.random() > 0.5 ? "#3f51b5" : "#ff9800",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Original content - kept exactly the same */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div data-aos="fade-up">
              <h4 className="title text-uppercase mb-4">Our Team</h4>
              <p className="text-muted mx-auto para-desc mb-0">
                Launch your project and leverage our expertise in designing and
                managing high-performance, conversion-focused websites.
              </p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          {teamMembers.map((member) => (
            <div className="col-lg-3 col-md-6 col-12" key={member.id}>
              <div
                className={`team-detail bg-light rounded text-center p-3 pb-4 ${
                  hoveredMember === member.id ? "team-hover-effect" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: "relative",
                  zIndex: 2,
                  background: "white",
                }}
              >
                <div className="image position-relative">
                  <img
                    src={member.image}
                    className="avatar avatar-medium rounded-pill"
                    alt={member.name}
                  />
                </div>
                <div className="content mt-3">
                  <h4 className="name mb-0">{member.name}</h4>
                  <h6 className="designation text-muted font-weight-normal">
                    {member.position}
                  </h6>
                  <br />
                  <ul className="list-unstyled social-icon mb-0 mt-4">
                    {/* Facebook */}
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.facebook}
                        className={`rounded-circle social-link ${
                          hoveredMember === member.id ? "social-hover" : ""
                        }`}
                        title="Facebook"
                      >
                        <i>{socialIcons.facebook}</i>
                      </a>
                    </li>

                    {/* LinkedIn */}
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.linkedin}
                        className={`rounded-circle social-link ${
                          hoveredMember === member.id ? "social-hover" : ""
                        }`}
                        title="LinkedIn"
                      >
                        <i>{socialIcons.linkedin}</i>
                      </a>
                    </li>

                    {/* YouTube */}
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.youtube}
                        className={`rounded-circle social-link ${
                          hoveredMember === member.id ? "social-hover" : ""
                        }`}
                        title="YouTube"
                      >
                        <i>{socialIcons.youtube}</i>
                      </a>
                    </li>

                    {/* Instagram */}
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.instagram}
                        className={`rounded-circle social-link ${
                          hoveredMember === member.id ? "social-hover" : ""
                        }`}
                        title="Instagram"
                      >
                        <i>{socialIcons.instagram}</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
