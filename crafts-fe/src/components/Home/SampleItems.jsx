import React from 'react';
import CakeTopper from '../../images/cake-topper.png';
import Cups from '../../images/carols-cups.png';
import TurkeyImg from '../../images/carol-turkey.png';
import Hats from '../../images/hats.png';
import SantaCam from '../../images/christmas.png';
import CustomSweater from '../../images/custom-sweater.png';
import { Link } from 'react-router-dom';

export default function SampleItems() {
  return (
    <>  
      <div className="sample-container">
        <img src={CakeTopper} alt="A decorative cake topper"/>
        <img src={Cups} alt="A collection of cups"/>
        <img src={TurkeyImg} alt="A crafted turkey image"/>
        <img src={Hats} alt="Mannequin showcasing a hat"/>
        <img src={CustomSweater} alt="A unique red sweater with custom attachments"/>
        <img src={SantaCam} alt="A decorative Santa Cam"/>
      </div>
      
      <div className="btn-container">
        <Link to={"/portfolio"} className="portfolio-btn">See Work</Link>
      </div>
    </>
  )
  
}