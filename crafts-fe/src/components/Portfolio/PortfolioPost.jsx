import React from 'react';
import TrashIcon from '../../images/delete-icon.png';
import CakeTopper from '../../images/cake-topper.png';
import Cups from '../../images/carols-cups.png';
import TurkeyImg from '../../images/carol-turkey.png';
import Hats from '../../images/hats.png';
import SantaCam from '../../images/christmas.png';
import CustomSweater from '../../images/custom-sweater.png';

export default function PortfolioPost() {
  return (
    <>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={CakeTopper} className="main-image" alt="Main" />
          </div>
        </div>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={Cups} className="main-image" alt="Main" />
          </div>
        </div>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={TurkeyImg} className="main-image" alt="Main" />
          </div>
        </div>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={Hats} className="main-image" alt="Main" />
          </div>
        </div>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={SantaCam} className="main-image" alt="Main" />
          </div>
        </div>
        <div className="post-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <div className="img-container">
            <img src={CustomSweater} className="main-image" alt="Main" />
          </div>
        </div>
    </>
  )
}
