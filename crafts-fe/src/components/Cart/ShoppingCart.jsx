import React from 'react';
import CakeTopper from '../../images/cake-topper.png'

export default function ShoppingCart() {
  return (
    <div className="cart-container">
      <div className="my-cart">
        <h4>Cart - 0 items</h4>
        
        <div className="cart-item">
          <div className="cart-body">
            <img src={CakeTopper} className="cart-img" />
          </div>
        </div>
      </div>

      <div className="summary-container">
        <h4>Summary</h4>

        <div className="summary-body">
          <h5>Items total: </h5>
        </div>
      </div>
    </div>
  )
}
