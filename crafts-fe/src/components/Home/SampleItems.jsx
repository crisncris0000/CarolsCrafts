import React from 'react';
import CakeTopper from '../../images/cake-topper.png';
import Cups from '../../images/carols-cups.png';
import TurkeyImg from '../../images/carol-turkey.png';
import Hats from '../../images/hats.png';
import SantaCam from '../../images/christmas.png';
import CustomSweater from '../../images/custom-sweater.png';

export default function SampleItems() {
  return (
    <>
        <h3 id="header-3">Recommended Items</h3>
        
        <div className="sample-container">
          <img src={CakeTopper} alt="Cake Topper"/>
          <img src={Cups} alt="Cups"/>
          <img src={TurkeyImg} alt="Cups"/>
          
          <img src={Hats} alt="Manaquin wearing hat"/>
          <img src={CustomSweater} alt="Red sweater with attachments to it"/>
          <img src={SantaCam} alt="Santa Cam"/>

        </div>
    </>
  )
}
