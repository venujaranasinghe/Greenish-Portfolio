import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'Colombo, Sri Lanka',
      description: 'Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.',
      achievements: [
        'Led migration from monolith to microservices architecture',
        'Reduced application load time by 60% through optimization',
        'Mentored 3 junior developers and conducted code reviews',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      period: '2020 - 2022',
      location: 'Colombo, Sri Lanka',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated third-party APIs and payment gateways',
        'Improved code quality by implementing testing frameworks',
        'Reduced bug reports by 45% through thorough testing'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      location: 'Colombo, Sri Lanka',
      description: 'Focused on creating intuitive user interfaces and improving user experience. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Developed responsive UI components library',
        'Improved website performance scores by 35%',
        'Collaborated with 3 different product teams',
        'Implemented accessibility standards (WCAG 2.1)'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Colombo',
      period: '2015 - 2019',
      location: 'Colombo, Sri Lanka',
      description: 'Graduated with First Class Honors. Specialized in Software Engineering and Database Systems.',
      achievements: [
        'Dean\'s List for 3 consecutive years',
        'Led university programming club',
        'Won inter-university hackathon 2018',
        'Published research paper on machine learning'
      ]
    },
    {
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2023',
      location: 'Online',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      achievements: [
        'Scored 890/1000 on certification exam',
        'Specialized in serverless architectures',
        'Expert in cloud security best practices'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022-456'
    },
    {
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2021',
      credentialId: 'NODEJS-DEV-2021-789'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2021',
      credentialId: 'MONGO-DEV-2021-123'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        <div className="experience-content">
          {activeTab === 'experience' && (
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h3>{exp.title}</h3>
                      <span className="period">{exp.period}</span>
                    </div>
                    <div className="company-info">
                      <h4>{exp.company}</h4>
                      <span className="location">{exp.location}</span>
                    </div>
                    <p className="description">{exp.description}</p>
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    <span className="period">{edu.period}</span>
                  </div>
                  <div className="institution-info">
                    <h4>{edu.institution}</h4>
                    <span className="location">{edu.location}</span>
                  </div>
                  <p className="description">{edu.description}</p>
                  <div className="achievements">
                    <h5>Highlights:</h5>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">🏆</div>
                  <h3>{cert.name}</h3>
                  <h4>{cert.issuer}</h4>
                  <div className="cert-details">
                    <span className="cert-date">Issued: {cert.date}</span>
                    <span className="credential-id">ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;