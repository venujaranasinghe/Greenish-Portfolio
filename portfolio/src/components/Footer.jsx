import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'API Development',
    'Cloud Solutions',
    'UI/UX Consultation',
    'Performance Optimization'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/kasunkalhara'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/kasunkalhara'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/kasunkalhara'
    },
    {
      name: 'Stack Overflow',
      icon: '📚',
      url: 'https://stackoverflow.com/users/kasunkalhara'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="brand-logo">
              <h3>Kasun Kalhara</h3>
              <span className="brand-tagline">Software Engineer</span>
            </div>
            <p className="brand-description">
              Passionate software engineer specializing in modern web technologies. 
              Building scalable applications and innovative solutions that make a difference.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:kasun.kalhara@email.com">kasun.kalhara@email.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
            <div className="availability-badge">
              <div className="status-dot"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Kasun Kalhara. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <button className="back-to-top" onClick={scrollToTop}>
                <span>↑</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;