import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Kasun delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.',
      project: 'E-commerce Platform',
      date: '2023'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, Digital Solutions',
      company: 'Digital Solutions',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Working with Kasun was a game-changer for our company. He transformed our outdated system into a modern, scalable application. His problem-solving skills and communication are top-notch.',
      project: 'System Modernization',
      date: '2023'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Product Manager, InnovateLab',
      company: 'InnovateLab',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Kasun\'s expertise in React and Node.js helped us build a robust task management application. He was professional, responsive, and delivered high-quality code. Highly recommended!',
      project: 'Task Management App',
      date: '2022'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder, StartupHub',
      company: 'StartupHub',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Exceptional developer with great communication skills. Kasun helped us launch our MVP in record time. His code quality and architectural decisions were spot-on.',
      project: 'MVP Development',
      date: '2022'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Kasun created a beautiful and functional website that perfectly represents our brand. The performance optimization he implemented resulted in a 40% increase in conversions.',
      project: 'Corporate Website',
      date: '2023'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        
        <div className="testimonials-content">
          <div className="testimonial-carousel">
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${
                    index === currentTestimonial ? 'active' : ''
                  }`}
                  style={{
                    transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                    opacity: index === currentTestimonial ? 1 : 0
                  }}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                      <span className="company">{testimonial.company}</span>
                    </div>
                    <div className="testimonial-meta">
                      <span className="project">{testimonial.project}</span>
                      <span className="date">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-btn prev" onClick={prevTestimonial}>
                ‹
              </button>
              <button className="carousel-btn next" onClick={nextTestimonial}>
                ›
              </button>
            </div>
            
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="testimonials-stats">
            <h3>Client Success Metrics</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          <h3>Recent Reviews</h3>
          <div className="reviews-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={testimonial.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="review-text">{testimonial.text}</p>
                <div className="review-meta">
                  <span className="review-project">{testimonial.project}</span>
                  <span className="review-date">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;