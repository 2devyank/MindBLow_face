import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Hero.css"

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <section className="hero">
          <h2>Connect with Licensed Psychologists</h2>
          <p>Book your session easily and start your journey to better mental health.</p>
          <button>Book a Session Now</button>
          <div className="hero-image">
            {/* <img src={heroImage} alt="Psychologist and client in session" /> */}
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Easy Booking</h3>
            <p>Schedule appointments with just a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Verified Professionals</h3>
            <p>All our psychologists are licensed and experienced.</p>
          </div>
          <div className="feature">
            <h3>Secure Sessions</h3>
            <p>Your privacy and confidentiality are our top priorities.</p>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Take the First Step?</h2>
          <p>Join thousands of others who have improved their mental well-being.</p>
          <button>Sign Up Now</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 MindWell Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;