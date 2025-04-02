import React, { useEffect, useRef } from 'react';

const Partners = () => {
  const sliderRef = useRef(null);
  
  useEffect(() => {
    // Make sure the DOM is fully loaded
    const timer = setTimeout(() => {
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        try {
          $(sliderRef.current).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          });
        } catch (error) {
          console.error("Error initializing slick:", error);
        }
      }
    }, 100);
    
    // Clean up
    return () => {
      clearTimeout(timer);
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        try {
          $(sliderRef.current).slick('unslick');
        } catch (e) {
          // Ignore if already destroyed
        }
      }
    };
  }, []);
  
  return (
    <section className="section-two bg-light">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div className="slider autoplay" ref={sliderRef}>
              <div><img src="/images/partnerlogo/dct.png" className="img-fluid mx-auto d-block logoSize" alt="partners" /></div>
              <div><img src="/images/partnerlogo/icp-ph.png" className="img-fluid mx-auto d-block logoSize" alt="partners" /></div>
              <div><img src="/images/partnerlogo/nftdavao.png" className="img-fluid mx-auto d-block logoSize" alt="partners" /></div>
              <div><img src="/images/partnerlogo/rerdao.png" className="img-fluid mx-auto d-block logoSize" alt="partners" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;