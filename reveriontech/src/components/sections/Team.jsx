import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Team = () => {
  // State to track which team member is being hovered
  const [hoveredMember, setHoveredMember] = useState(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Rod A.",
      position: "Founder",
      image: "images/profile/profile1.jpg"
    },
    {
      id: 2,
      name: "Mhok S.",
      position: "CTO",
      image: "images/profile/profile2.jpg"
    },
    {
      id: 3,
      name: "Darian S",
      position: "Business Development",
      image: "images/profile/profile3.jpg"
    },
    {
      id: 4,
      name: "Jhon Rexey",
      position: "Frontend Developer",
      image: "images/profile/profile4.jpg"
    },
    {
      id: 5,
      name: "Kent A.",
      position: "Backend Developer",
      image: "images/profile/profile5.jpg"
    },
    {
      id: 6,
      name: "Racker Joy S.",
      position: "Researcher",
      image: "images/profile/profile6.jpg"
    },
    {
      id: 7,
      name: "WhiteFish",
      position: "Lead Creatives",
      image: "images/profile/profile7.jpg"
    },
    {
      id: 8,
      name: "Jennifer C.",
      position: "CFO",
      image: "images/profile/profile8.jpg"
    }
  ];

  // Social media links with react-icons
  const socialLinks = [
    { icon: <FaFacebookF />, title: "Facebook", url: "#" },
    { icon: <FaLinkedinIn />, title: "Linkedin", url: "#" },
    { icon: <FaYoutube />, title: "Youtube", url: "#" },
    { icon: <FaInstagram />, title: "Instagram", url: "#" }
  ];

  // Mouse event handlers
  const handleMouseEnter = (memberId) => {
    setHoveredMember(memberId);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <section className="section" id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title" data-aos="fade-up">
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
                className={`team-detail bg-light rounded text-center p-3 pb-4 ${hoveredMember === member.id ? 'team-hover-effect' : ''}`}
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={handleMouseLeave}
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
                  <h6 className="designation text-muted font-weight-normal">{member.position}</h6>
                  <br />
                  <ul className="list-unstyled social-icon mb-0 mt-4">
                    {socialLinks.map((social, index) => (
                      <li className="list-inline-item" key={index}>
                        <a 
                          href={social.url} 
                          className={`rounded-circle social-link ${hoveredMember === member.id ? 'social-hover' : ''}`} 
                          title={social.title}
                        >
                          <i>{social.icon}</i>
                        </a>
                      </li>
                    ))}
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