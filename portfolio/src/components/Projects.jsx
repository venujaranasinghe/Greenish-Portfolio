import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A comprehensive e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
      longDescription: 'Built a scalable e-commerce platform serving 10,000+ users with features including product catalog, shopping cart, secure payment processing, order management, and comprehensive admin dashboard. Implemented real-time inventory tracking and automated email notifications.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Real-time inventory management',
        'Secure payment processing with Stripe',
        'Advanced search and filtering',
        'Order tracking and notifications',
        'Responsive admin dashboard'
      ],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/kasunkalhara/ecommerce-platform',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      longDescription: 'Developed a comprehensive task management solution with real-time collaboration features, drag-and-drop functionality, team workspaces, and advanced project tracking. Used modern React patterns and state management.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Redux', 'Socket.io', 'Material-UI', 'Firebase'],
      features: [
        'Real-time collaboration',
        'Drag-and-drop task management',
        'Team workspaces',
        'Progress tracking',
        'File attachments'
      ],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/kasunkalhara/task-manager',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      category: 'frontend',
      description: 'Interactive weather dashboard with data visualization, forecasting, and location-based weather tracking.',
      longDescription: 'Created an interactive weather analytics dashboard featuring real-time weather data, 7-day forecasts, interactive maps, and detailed analytics with beautiful data visualizations using Chart.js and D3.js.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Chart.js', 'D3.js', 'OpenWeather API', 'Tailwind'],
      features: [
        'Real-time weather data',
        'Interactive weather maps',
        '7-day forecast',
        'Historical data analysis',
        'Location-based tracking'
      ],
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/kasunkalhara/weather-dashboard',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for social media platform with authentication, real-time messaging, and content management.',
      longDescription: 'Built a robust RESTful API for a social media platform with JWT authentication, real-time messaging using WebSockets, content moderation, and comprehensive user management system.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
      features: [
        'JWT authentication system',
        'Real-time messaging',
        'Content moderation',
        'User relationship management',
        'File upload handling'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/kasunkalhara/social-media-api',
      status: 'completed'
    },
    {
      id: 5,
      title: 'AI-Powered Chat Application',
      category: 'fullstack',
      description: 'Modern chat application with AI integration, smart replies, and advanced conversation features.',
      longDescription: 'Developing an innovative chat application with AI-powered features including smart reply suggestions, sentiment analysis, language translation, and automated moderation using OpenAI GPT integration.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Redis'],
      features: [
        'AI-powered smart replies',
        'Real-time translation',
        'Sentiment analysis',
        'Voice messages',
        'End-to-end encryption'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/kasunkalhara/ai-chat-app',
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      category: 'fullstack',
      description: 'Secure voting system built on blockchain technology ensuring transparency and immutability.',
      longDescription: 'Conceptualizing a secure voting system using blockchain technology to ensure vote integrity, transparency, and immutability. Features include voter authentication, real-time results, and audit trails.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
      features: [
        'Blockchain-based voting',
        'Smart contract integration',
        'Voter authentication',
        'Real-time results',
        'Immutable audit trail'
      ],
      liveUrl: null,
      githubUrl: null,
      status: 'planning'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#28ca42';
      case 'in-progress': return '#ffbd2e';
      case 'planning': return '#ff5f57';
      default: return '#8EB69B';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        📚 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div 
                    className="project-status"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {getStatusLabel(project.status)}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div 
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                >
                  {getStatusLabel(selectedProject.status)}
                </div>
              </div>
              
              <div className="modal-body">
                <img 
                  src={selectedProject.image || "/placeholder.svg"} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
                
                <div className="modal-details">
                  <p className="modal-description">{selectedProject.longDescription}</p>
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-links">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        🔗 View Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        📚 View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;