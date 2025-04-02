import React from 'react';

const Hero = () => {
  const scrollToSection = (elementId, e) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="bg-home" style={{backgroundImage: "url('/images/landingpict.jpg')"}} id="home">
      <div className="bg-overlay"></div>
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-heading text-center mt-5 pt-4" data-aos="fade-up">
                  <h1 className="heading text-white mb-3">ReverionTech</h1>
                  <p className="para-desc mx-auto text-light">
                    Empower your business with <span className="words-color">Web3</span>, <span className="words-color">GenAI</span>, and <span className="words-color">Scalable</span> digital solutions
                  </p>
                  <div className="mt-4 pt-2">
                    <a 
                      href="#project" 
                      className="btn btn-custom"
                      onClick={(e) => scrollToSection('project', e)}
                    >
                     Start your project
                    </a>
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

export default Hero;