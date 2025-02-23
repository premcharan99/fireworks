import React, { useState, useEffect } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaArrowRight, FaArrowLeft, FaStar, FaShieldAlt, FaQuestionCircle, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import './Home.css';
import vsn from './v.s.n.jpg';
import owner from './owner.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showMoreSections, setShowMoreSections] = useState(false);

  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png"
  ];

  const mainNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const extraNavLinks = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'safety', label: 'Safety' },
    { id: 'faq', label: 'FAQ' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const services = [
    {
      title: "Wedding Fireworks",
      description: "Create magical moments on your special day with our spectacular displays, tailored to your theme and preferences.",
      icon: "🎆"
    },
    {
      title: "Festival Celebrations",
      description: "Light up your festivals with grand, synchronized firework shows that leave lasting impressions.",
      icon: "✨"
    },
    {
      title: "Corporate Events",
      description: "Impress clients and stakeholders with professional, high-impact pyrotechnic displays for brand launches and events.",
      icon: "🎇"
    },
    {
      title: "Custom Shows",
      description: "Personalized firework experiences designed to match your vision, from intimate gatherings to grand celebrations.",
      icon: "💫"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      event: "Wedding",
      review: "Sri Ganapathi Grand Fireworks made our wedding night unforgettable. The display was breathtaking and perfectly timed!",
      rating: 5,
      designation: "CEO, Tech Solutions"
    },
    {
      name: "Priya Sharma",
      event: "Corporate Event",
      review: "Their professionalism and creativity were outstanding. Our clients were amazed by the firework show!",
      rating: 5,
      designation: "Event Manager"
    },
    {
      name: "Anil Reddy",
      event: "Festival Celebration",
      review: "Safe, spectacular, and mesmerizing. They truly know how to light up a festival!",
      rating: 5,
      designation: "Cultural Committee Head"
    }
  ];

  const contactInfo = [
    {
      type: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/919949257777",
      text: "+91 9949257777"
    },
    {
      type: "Email",
      icon: <FaEnvelope />,
      link: "mailto:sriganapathi1932@gmail.com",
      text: "sriganapathi1932@gmail.com"
    },
    {
      type: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sri_ganapathi_fireworks",
      text: "@sri_ganapathi_fireworks"
    }
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
  }, [images.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <h1 className="company-name">Sri Ganapathi Grand Fire Works</h1>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {mainNavLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
          
          <div className="more-menu">
            <button 
              className="more-button"
              onClick={() => setShowMoreSections(!showMoreSections)}
            >
              More <FaChevronDown />
            </button>
            {showMoreSections && (
              <div className="more-dropdown">
                {extraNavLinks.map(link => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="nav-contact">
          <a href="tel:9949257777" className="contact-button phone">
            <FaPhone /> <span>9949257777</span>
          </a>
          <a href="https://www.instagram.com/sri_ganapathi_fireworks" className="contact-button instagram">
            <FaInstagram />
          </a>
        </div>

        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <section id="home" className="hero-section">
  <div id="fireworks-container"></div>
  <div className="hero-slider">
    <button className="slider-arrow left" onClick={prevImage}>
      <FaArrowLeft />
    </button>
    <div className="slider-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
      {images.map((img, index) => (
        <div key={index} className="slide">
          <img src={img} alt={`Firework display ${index + 1}`} />
          <div className="slide-content">
            <h2>Spectacular Firework Displays</h2>
            <p>Creating Magical Moments for Every Celebration</p>
            <button className="cta-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
    <button className="slider-arrow right" onClick={nextImage}>
      <FaArrowRight />
    </button>
  </div>
</section>

      {/* About section with enhanced text styling */}
      <section id="about" className="about-section">
  <div className="section-content">
    <h2 className="section-title">About Us</h2>
    <div className="about-text-container">
      <p className="about-highlight">
        Established in 1932, Sri Ganapathi Grand Fireworks has been illuminating celebrations for over nine decades.
      </p>
      
      <div className="about-images">
  <div className="founder-image">
    <img  src={vsn} alt="V. Satyanarayana Murthy - Founder" />
    <div className="image-caption">V. Satyanarayana Murthy - Founder</div>
  </div>
  <div className="founder-image">
    <img src={owner} alt="V. Chitti Babu - Current Owner" />
    <div className="image-caption">V. Chitti Babu - Current Owner</div>
  </div>
</div>


      <div className="about-grid">
        <div className="about-card">
          <h3>Our Legacy</h3>
          <p>Founded by V. Satyanarayana Murthy and now led by V. Chitti Babu, we've maintained our position as industry pioneers through innovation and excellence.</p>
        </div>
        <div className="about-card">
          <h3>Our Experience</h3>
          <p>With over 100,000+ successful shows, we've mastered the art of creating breathtaking displays that capture hearts and imaginations.</p>
        </div>
        <div className="about-card">
          <h3>Our Commitment</h3>
          <p>Safety, quality, and customer satisfaction are at the core of everything we do, ensuring memorable experiences for all our clients.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-designation">{testimonial.designation}</p>
                </div>
                <p className="testimonial-event">{testimonial.event}</p>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-methods">
          {contactInfo.map((info, index) => (
            <a 
              key={index}
              href={info.link}
              className="contact-method"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{info.icon}</div>
              <div className="contact-text">
                <h3>{info.type}</h3>
                <p>{info.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Keep other sections but hide them behind "More" button in navigation */}
      {/* Add Portfolio, Safety, FAQ, and Achievements sections here */}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Ganapathi Grand Fire Works</h3>
            <p>Creating magical moments through spectacular displays since 1932</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {mainNavLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="footer-contact-item">
                  {info.icon} <span>{info.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sri Ganapathi Grand Fire Works. All rights reserved.</p>
          <p>Developed by Karthik Dondapati</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;