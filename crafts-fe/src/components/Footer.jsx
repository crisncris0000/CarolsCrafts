import React from 'react';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet turpis sed ex semper mollis.</p>
            </div>
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <ul className="contact-info">
                <li>Email: example@example.com</li>
                <li>Phone: +1 123 456 7890</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
