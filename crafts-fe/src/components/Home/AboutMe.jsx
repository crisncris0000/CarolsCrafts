import React from 'react';
import Selfie from "../../images/mami-selfie.jpeg"
export default function AboutMe() {
  return (
    <>
        <div className="about-section">
          <div className="image-container">
            <img src={Selfie} alt="Selfie of Carol"/>
          </div>
          <div className="about-me">
            <h2 style={{textDecoration: "underline"}}>About Me</h2>

            <p className="description">
              I am Carol and I make crafts
            </p>
          </div>
        </div>
    </>
  )
}
