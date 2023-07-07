import React from 'react'
import InstaLogo from '../images/instagram-logo.png';
import PageLogo from '../images/Logo.png'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
        <div className="footer">
          <img src={PageLogo}></img>
          <div className="socials">
            <h4>Socials</h4>
            <a href="https://www.instagram.com/mckcarcreations/" target="_blank">
              <img src={InstaLogo} id="insta-logo" alt="instagram logo"/>
            </a>
          </div>
          <div className="navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Shop</Link>
            <Link to="/" className="nav-link">About</Link>
          </div>
        </div>
    </>
  )
}
