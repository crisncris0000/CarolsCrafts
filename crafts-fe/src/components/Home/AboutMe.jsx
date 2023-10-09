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
            Hello! I'm Carol, a passionate crafter with a knack for adding personal touches to everyday items. 
            From customizing sweaters with unique names to designing bespoke cups and celebration cake toppers, 
            my crafts infuse moments with a special charm.
            </p>
          </div>
        </div>
    </>
  )
}