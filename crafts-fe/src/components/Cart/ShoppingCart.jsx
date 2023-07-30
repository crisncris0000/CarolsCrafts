import React from 'react';
import CakeTopper from '../../images/cake-topper.png'
import ItemList from './ItemList';
import Summary from './Summary';

export default function ShoppingCart() {
  return (
    <div className="cart-container">
        <ItemList />
        <Summary />
    </div>
  )
}
