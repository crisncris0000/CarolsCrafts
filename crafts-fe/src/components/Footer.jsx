import React from 'react';
import InstagramLogo from '../images/instagram-logo.png'
import Logo from '../images/Logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt="Your Logo" id="logo"/>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              This is a website where everyone can order something that is available, along with having a portfolio page where you can see my best work!
              If you would like custom stuff done please email me, or follow my instagram and I'll get back to you when possible.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li>Email: motame@outlook.com</li>
            </ul>

            <div className="social-icons">
              <a href="https://www.instagram.com/mckcarcreations/" target="_blank" className="social-icon">
                <img src={InstagramLogo} id="logo" alt="instagram page" rel="noreferrer"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
