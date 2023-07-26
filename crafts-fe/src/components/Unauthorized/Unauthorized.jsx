import React from 'react';
import Shield from '../../images/shield-icon.png'

export default function () {
  return (
    <>
      <img src={Shield} alt="Unauthorized Page" style={{marginTop: "100px", height: "150px", width: "150px"}} />
      <h2>You do not have the necessary credentials to view this page</h2>
        
      <p>
        Icon created by Anu Rocks <a href="https://freeicons.io/profile/730">https://freeicons.io/profile/730</a> on 
        <a href="https://freeicons.io/">https://freeicons.io/</a>
      </p>

    </>
  )
}
