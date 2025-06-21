import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Passionate Software Engineer</h3>
              <p>
                I'm a dedicated software engineer with over 5 years of experience in building 
                robust, scalable web applications. My journey in tech started with a curiosity 
                about how things work, which evolved into a passion for creating innovative solutions 
                that make a real impact.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h4>🎯 Mission</h4>
                <p>
                  To leverage cutting-edge technologies and best practices to build applications 
                  that not only meet business requirements but exceed user expectations.
                </p>
              </div>

              <div className="detail-item">
                <h4>💡 Approach</h4>
                <p>
                  I believe in writing clean, maintainable code and following agile methodologies. 
                  I'm always eager to learn new technologies and share knowledge with the community.
                </p>
              </div>

              <div className="detail-item">
                <h4>🚀 Goals</h4>
                <p>
                  Currently focused on mastering cloud architecture and contributing to open-source 
                  projects while building products that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="personal-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Colombo, Sri Lanka</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Experience</span>
                  <span className="info-value">5+ Years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education</span>
                  <span className="info-value">BSc Computer Science</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">English, Sinhala</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>KK</span>
                </div>
                <div className="status-indicator"></div>
              </div>
              <div className="profile-info">
                <h3>Kasun Kalhara</h3>
                <p>Senior Software Engineer</p>
                <div className="profile-stats">
                  <div className="profile-stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="achievements">
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">
                  <h4>Best Developer Award</h4>
                  <p>Company Recognition 2023</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🎓</div>
                <div className="achievement-text">
                  <h4>AWS Certified</h4>
                  <p>Solutions Architect</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">⭐</div>
                <div className="achievement-text">
                  <h4>Open Source</h4>
                  <p>500+ GitHub Stars</p>
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