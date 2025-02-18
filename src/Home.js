import React, { useState, useEffect } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const images = [
    "/api/placeholder/1200/600",
    "/api/placeholder/1200/600",
    "/api/placeholder/1200/600"
  ];

  const services = [
    {
      title: "Wedding Fireworks",
      description: "Create magical moments on your special day with our spectacular displays",
      icon: "🎆"
    },
    {
      title: "Festival Celebrations",
      description: "Light up your festivals with our grand firework shows",
      icon: "✨"
    },
    {
      title: "Corporate Events",
      description: "Impress your clients with professional pyrotechnic displays",
      icon: "🎇"
    },
    {
      title: "Custom Shows",
      description: "Personalized firework experiences tailored to your vision",
      icon: "💫"
    }
  ];

  const achievements = [
    { number: "1000+", title: "Events Completed" },
    { number: "100+", title: "Corporate Clients" },
    { number: "5000+", title: "Happy Customers" },
    { number: "15+", title: "Years Experience" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <h1 className="company-name">Sri Ganapathi Grand Fire Works</h1>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
          <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a>
        </div>

        <div className="nav-contact">
          <a href="tel:+1234567890" className="phone-number">
            <FaPhone /> +123-456-7890
          </a>
          <a href="https://instagram.com" className="social-link">
            <FaInstagram />
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-slider">
          <button className="slider-arrow left" onClick={prevImage}><FaArrowLeft /></button>
          <div className="slider-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="slide">
                <img src={img} alt={`Firework display ${index + 1}`} />
                <div className="slide-content">
                  <h2 className="animated-title">Spectacular Firework Displays</h2>
                  <p className="animated-subtitle">Creating Magical Moments for Every Celebration</p>
                  <button className="cta-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-arrow right" onClick={nextImage}><FaArrowRight /></button>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            With over 15 years of expertise in pyrotechnics, Sri Ganapathi Grand Fire Works has been
            creating unforgettable moments through spectacular firework displays. Our commitment to
            safety, innovation, and customer satisfaction sets us apart in the industry.
          </p>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="portfolio-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="portfolio-item">
              <img src={`/api/placeholder/400/300`} alt={`Portfolio ${item}`} />
              <div className="portfolio-overlay">
                <h3>Event Name {item}</h3>
                <p>View Details</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <h2 className="section-title">Our Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-title">{achievement.title}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Ganapathi Grand Fire Works</h3>
            <p>Creating magical moments through spectacular displays</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><FaPhone /> +123-456-7890</p>
              <p><FaEnvelope /> info@sriganapathi.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://instagram.com"><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sri Ganapathi Grand Fire Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;