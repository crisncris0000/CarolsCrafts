import React from 'react'
import Image from '../../images/cake-topper.png'
export default function () {
  return (
    <>
      <h1 style={{float: "left", marginLeft: "10vw", marginTop: "5vw"}}>Work</h1>
        <div className="portfolio-container">
          <img src={Image}/>
          <img src={Image}/>
          <img src={Image}/>
          <img src={Image}/>
          <img src={Image}/>
        </div>
    </>
  )
}
