import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaUser, FaEdit, FaComments } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
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
  
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-5">
              <h4 className="title text-uppercase mb-4">Contact Us</h4>
              <p className="text-muted">Shaping the future of decentralized technology</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="d-flex">
              <div className="contact-icon me-4">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
                  <FaPhone className="text-white fs-4" />
                </div>
              </div>
              <div className="contact-info">
                <h5 className="mb-2">Call Me</h5>
                <p className="text-muted">+915 5864 548</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="d-flex">
              <div className="contact-icon me-4">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
                  <FaMapMarkerAlt className="text-white fs-4" />
                </div>
              </div>
              <div className="contact-info">
                <h5 className="mb-2">Office</h5>
                <p className="text-muted">Lot3, block14, Phase 9a, Executive Phase,<br/> Deca Homes, Tacunan</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="d-flex">
              <div className="contact-icon me-4">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
                  <FaEnvelope className="text-white fs-4" />
                </div>
              </div>
              <div className="contact-info">
                <h5 className="mb-2">Send Me</h5>
                <p className="text-muted">yourname@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-12">
            {formStatus.message && (
              <div className={`alert ${formStatus.isSuccess ? 'alert-success' : 'alert-danger'} mb-4`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label htmlFor="name" className="form-label">Your Name <span className="text-danger">*</span></label>
                  <input 
                    name="name" 
                    id="name" 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="col-md-4 mb-3 mb-md-0">
                  <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                  <input 
                    name="email" 
                    id="email" 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="col-md-4">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    name="subject" 
                    id="subject" 
                    className="form-control" 
                    placeholder="Your subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-md-12">
                  <label htmlFor="message" className="form-label">Your Message <span className="text-danger">*</span></label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="5" 
                    className="form-control" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <button 
                    type="submit" 
                    className="btn btn-warning text-white w-100 py-3"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;