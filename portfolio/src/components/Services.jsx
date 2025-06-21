import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      price: 'Starting from $2,000'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native Performance',
        'Offline Functionality',
        'Push Notifications',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'Starting from $3,000'
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'Robust and scalable RESTful APIs and GraphQL services.',
      features: [
        'RESTful Architecture',
        'GraphQL Integration',
        'Authentication & Security',
        'Documentation'
      ],
      technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB'],
      price: 'Starting from $1,500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, deployment, and maintenance services.',
      features: [
        'AWS/Azure Setup',
        'CI/CD Pipelines',
        'Auto Scaling',
        'Monitoring & Logging'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      price: 'Starting from $1,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Consultation',
      description: 'User experience optimization and interface design consultation.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      price: 'Starting from $800'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Website and application performance analysis and optimization.',
      features: [
        'Speed Optimization',
        'Code Splitting',
        'Caching Strategies',
        'Bundle Analysis'
      ],
      technologies: ['Webpack', 'Lighthouse', 'GTMetrix', 'New Relic'],
      price: 'Starting from $600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and target audience to create a comprehensive project plan.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes to visualize the final product.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building the application using modern technologies and following best practices.',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploying to production environment and ensuring smooth launch with monitoring.',
      duration: '1 week'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to ensure optimal performance.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="service-price">{service.price}</div>
              
              <button className="service-btn">Get Quote</button>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h3 className="process-title">My Development Process</h3>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <span className="step-duration">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your ideas and bring them to life with cutting-edge technology and exceptional design.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn-primary">Start a Project</a>
              <a href="#contact" className="btn-secondary">Schedule a Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;