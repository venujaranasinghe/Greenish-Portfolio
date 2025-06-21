import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '🔺' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML5/CSS3', level: 92, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        { name: 'Vue.js', level: 75, icon: '💚' },
        { name: 'Redux', level: 80, icon: '🔄' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Django', level: 80, icon: '🎯' },
        { name: 'GraphQL', level: 78, icon: '📊' },
        { name: 'REST APIs', level: 95, icon: '🔗' },
        { name: 'Microservices', level: 82, icon: '🏗️' },
        { name: 'Socket.io', level: 75, icon: '⚡' }
      ]
    },
    database: {
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MySQL', level: 80, icon: '🗄️' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'AWS', level: 82, icon: '☁️' },
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Kubernetes', level: 70, icon: '⚙️' },
        { name: 'Firebase', level: 78, icon: '🔥' }
      ]
    },
    tools: {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: '📚' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Jest', level: 80, icon: '🧪' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Linux', level: 82, icon: '🐧' },
        { name: 'Agile/Scrum', level: 88, icon: '🏃' }
      ]
    }
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            <h3 className="category-title">
              {skillCategories[activeCategory].title}
            </h3>
            
            <div className="skills-list">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Favorite Tech Stack</h3>
          <div className="stack-items">
            <div className="stack-item">
              <div className="stack-icon">⚛️</div>
              <span>React</span>
            </div>
            <div className="stack-connector">+</div>
            <div className="stack-item">
              <div className="stack-icon">🟢</div>
              <span>Node.js</span>
            </div>
            <div className="stack-connector">+</div>
            <div className="stack-item">
              <div className="stack-icon">🍃</div>
              <span>MongoDB</span>
            </div>
            <div className="stack-connector">+</div>
            <div className="stack-item">
              <div className="stack-icon">☁️</div>
              <span>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;