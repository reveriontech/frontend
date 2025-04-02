import React, { useState } from 'react';
import { 
  FaCloud, 
  FaLaptop, 
  FaShoppingCart, 
  FaLightbulb, 
  FaRecycle, 
  FaClock, 
  FaDatabase, 
  FaSearchDollar 
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('pills-cloud');
  const [hoveredTab, setHoveredTab] = useState(null);
  
  const handleTabClick = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };
  
  // Add these functions for hover state management
  const handleMouseEnter = (tabId) => {
    setHoveredTab(tabId);
  };
  
  const handleMouseLeave = () => {
    setHoveredTab(null);
  };
  
  // Function to determine if a tab should show the hover effect
  const shouldShowHoverEffect = (tabId) => {
    return activeTab === tabId || hoveredTab === tabId;
  };
  
  return (
    <section className="section" id='about'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title" data-aos="fade-up">
              <h4 className="title text-uppercase mb-4">ReverionTech Capabilities</h4>
              <p className="text-muted mx-auto para-desc mb-0">
                Reverion Tech is transforming the digital world with next-generation Web3, 
                AI, and DevOps solutions. Leverage the power of decentralization, intelligent
                automation, and seamless scalability to build secure, future-proof technology 
                that drives your success.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <div className="row" data-aos="fade-up">
              {/* First Row */}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-cloud' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-cloud', e)}
                  href="#pills-cloud"
                  role="tab"
                  aria-controls="pills-cloud"
                  aria-selected={activeTab === 'pills-cloud'}
                  onMouseEnter={() => handleMouseEnter('pills-cloud')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-cloud') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-cloud') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaCloud className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">UI/UX Web<br /> Design</h5>
                  </div>
                </a>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-smart' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-smart', e)}
                  href="#pills-smart"
                  role="tab"
                  aria-controls="pills-smart"
                  aria-selected={activeTab === 'pills-smart'}
                  onMouseEnter={() => handleMouseEnter('pills-smart')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-smart') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-smart') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaLaptop className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">Custom Web Application<br />Development</h5>
                  </div>
                </a>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-apps' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-apps', e)}
                  href="#pills-apps"
                  role="tab"
                  aria-controls="pills-apps"
                  aria-selected={activeTab === 'pills-apps'}
                  onMouseEnter={() => handleMouseEnter('pills-apps')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-apps') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-apps') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaShoppingCart className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">Web3 & Blockchain<br />Development</h5>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-intelligence' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-intelligence', e)}
                  href="#pills-intelligence"
                  role="tab"
                  aria-controls="pills-intelligence"
                  aria-selected={activeTab === 'pills-intelligence'}
                  onMouseEnter={() => handleMouseEnter('pills-intelligence')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-intelligence') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-intelligence') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaLightbulb className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">Enterprise AI<br />Integration</h5>
                  </div>
                </a>
              </div>

              {/* Second Row */}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-automation' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-automation', e)}
                  href="#pills-automation"
                  role="tab"
                  aria-controls="pills-automation"
                  aria-selected={activeTab === 'pills-automation'}
                  onMouseEnter={() => handleMouseEnter('pills-automation')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-automation') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-automation') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaShoppingCart className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">E-commerce<br />Solutions</h5>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-data' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-data', e)}
                  href="#pills-data"
                  role="tab"
                  aria-controls="pills-data"
                  aria-selected={activeTab === 'pills-data'}
                  onMouseEnter={() => handleMouseEnter('pills-data')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-data') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-data') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaDatabase className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">Enterprise Data<br />Engineering</h5>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-cloud-devops' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-cloud-devops', e)}
                  href="#pills-cloud-devops"
                  role="tab"
                  aria-controls="pills-cloud-devops"
                  aria-selected={activeTab === 'pills-cloud-devops'}
                  onMouseEnter={() => handleMouseEnter('pills-cloud-devops')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-cloud-devops') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-cloud-devops') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaRecycle className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">Cloud Migration<br />& DevOps</h5>
                  </div>
                </a>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                <a 
                  className={`nav-link ${activeTab === 'pills-seo' ? 'active' : ''}`}
                  onClick={(e) => handleTabClick('pills-seo', e)}
                  href="#pills-seo"
                  role="tab"
                  aria-controls="pills-seo"
                  aria-selected={activeTab === 'pills-seo'}
                  onMouseEnter={() => handleMouseEnter('pills-seo')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`capabilities text-center rounded pt-3 pb-3 border shadow-sm ${shouldShowHoverEffect('pills-seo') ? 'tab-hover-effect' : ''}`}>
                    <div className={`icon ${shouldShowHoverEffect('pills-seo') ? 'bg-warning' : 'bg-warning'} rounded-circle mb-2 p-2 d-inline-flex justify-content-center align-items-center transition-all`}>
                      <FaSearchDollar className="text-white" size={20} />
                    </div>
                    <h5 className="title font-weight-normal mb-0">SEO & Digital<br />Marketing</h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="tab-content mt-4" id="pills-tabContent" data-aos="fade-up">
              <div 
                className={`tab-pane fade ${activeTab === 'pills-cloud' ? 'show active' : ''}`}
                id="pills-cloud" 
                role="tabpanel" 
                aria-labelledby="pills-cloud-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">UI/UX Web Design</h4>
                      <p className="text-muted">
                         We craft seamless digital experiences by blending aesthetics with functionality. Our approach focuses on user-centric design principles to enhance engagement and usability across all platforms.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">User research and persona development</li>
                        <li className="mt-2">Wireframing, prototyping, and visual design</li>
                        <li className="mt-2">Usability testing and interaction design</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/marketing.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`tab-pane fade ${activeTab === 'pills-smart' ? 'show active' : ''}`}
                id="pills-smart" 
                role="tabpanel" 
                aria-labelledby="pills-smart-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">Custom Web Application Development</h4>
                      <p className="text-muted">
                          We build powerful, scalable, and high-performance web applications tailored to your business needs. Our development process focuses on efficiency, security, and seamless user experiences, ensuring your platform is ready for growth and innovation.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Full-stack development with modern frameworks</li>
                        <li className="mt-2">Responsive design and third-party integrations</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/crm.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`tab-pane fade ${activeTab === 'pills-apps' ? 'show active' : ''}`}
                id="pills-apps" 
                role="tabpanel" 
                aria-labelledby="pills-apps-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">Web3 & Blockchain Development</h4>
                      <p className="text-muted">
                         We specialize in building secure, scalable, and decentralized solutions that leverage the power of blockchain technology. From smart contracts to enterprise-grade blockchain applications, we help businesses navigate the future of digital transformation with trust and transparency.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Smart contracts and decentralized applications</li>
                        <li className="mt-2">NFT marketplaces and enterprise blockchain solutions</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`tab-pane fade ${activeTab === 'pills-intelligence' ? 'show active' : ''}`}
                id="pills-intelligence" 
                role="tabpanel" 
                aria-labelledby="pills-intelligence-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">Enterprise AI Integration</h4>
                      <p className="text-muted">
                          We empower businesses with cutting-edge AI solutions, integrating intelligent automation, predictive analytics, and deep learning models to drive efficiency and innovation. Our AI-driven approach transforms data into actionable insights, enhancing decision-making and operational performance.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Custom AI models and predictive analytics</li>
                        <li className="mt-2">Natural language processing and computer vision</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`tab-pane fade ${activeTab === 'pills-automation' ? 'show active' : ''}`}
                id="pills-automation" 
                role="tabpanel" 
                aria-labelledby="pills-automation-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">E-Commerce Solutions</h4>
                      <p className="text-muted">
                          We build high-performance e-commerce platforms that drive conversions, enhance user experiences, and streamline business operations. Whether you're scaling an existing store or launching a new digital marketplace, our solutions are designed for flexibility, security, and seamless integration.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Custom platforms and headless commerce</li>
                        <li className="mt-2">Payment integrations and inventory management</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`tab-pane fade ${activeTab === 'pills-data' ? 'show active' : ''}`}
                id="pills-data" 
                role="tabpanel" 
                aria-labelledby="pills-data-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">Enterprise Data Engineering</h4>
                      <p className="text-muted">
                        We design and implement scalable data architectures that transform raw data into actionable business insights. Our solutions optimize data pipelines, ensure efficient storage, and enable advanced analytics for data-driven decision-making.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Data pipelines and warehouse implementation</li>
                        <li className="mt-2">Business intelligence and big data architecture</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`tab-pane fade ${activeTab === 'pills-cloud-devops' ? 'show active' : ''}`}
                id="pills-cloud-devops" 
                role="tabpanel" 
                aria-labelledby="pills-cloud-devops-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">Cloud Migration & DevOps</h4>
                      <p className="text-muted">
                         We streamline cloud adoption and automate infrastructure management to enhance scalability, security, and operational efficiency. Our expertise ensures seamless cloud transitions, optimized workloads, and continuous delivery for faster deployments.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Cloud migration strategy and Infrastructure as Code</li>
                        <li className="mt-2">CI/CD pipelines and containerization</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`tab-pane fade ${activeTab === 'pills-seo' ? 'show active' : ''}`}
                id="pills-seo" 
                role="tabpanel" 
                aria-labelledby="pills-seo-tab"
              >
                <div className="capabilities-content border rounded p-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="title">SEO & Digital Marketing</h4>
                      <p className="text-muted">
                         We implement data-driven SEO and digital marketing strategies to enhance online visibility, drive organic traffic, and boost conversions. Our approach combines technical expertise with creative content to deliver measurable growth.
                      </p>
                      <ul className="mb-0">
                        <li className="mt-2">Technical and on-page SEO optimization</li>
                        <li className="mt-2">International SEO for global markets</li>
                        <li className="mt-2">Content strategy and link building</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mt-4 pt-2">
                      <img src="images/feature/apps.svg" className="img-fluid d-block mx-auto" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;