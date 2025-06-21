import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kasun.kalhara@email.com',
      link: 'mailto:kasun.kalhara@email.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/kasunkalhara',
      link: 'https://linkedin.com/in/kasunkalhara'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/kasunkalhara',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/kasunkalhara',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/kasunkalhara',
      color: '#1da1f2'
    },
    {
      name: 'Stack Overflow',
      icon: '📚',
      url: 'https://stackoverflow.com/users/kasunkalhara',
      color: '#f48024'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Ready to Start Your Project?</h3>
              <p>
                I'm always excited to work on new projects and help bring your ideas to life. 
                Whether you need a complete web application, mobile app, or just want to discuss 
                your project requirements, I'm here to help.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
              <p>Currently accepting new client work for Q2 2024</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry, consultation, etc."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, requirements, goals, and any specific features you need..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <span className="success-icon">✓</span>
                  Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;