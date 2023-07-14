import React from 'react';
import Image from '../../images/cake-topper.png';
import TrashIcon from '../../images/delete-icon.png';

export default function PortfolioPost() {
  return (
    <>
        <div className="img-container">
          <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
          <img src={Image} className="main-image" alt="Main" />
        </div>
    </>
  )
}
