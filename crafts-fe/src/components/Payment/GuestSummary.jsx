import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function GuestSummary() {
    const location = useLocation();
    const totalPrice = location.state.totalPrice;
    const guestCart = useSelector((state) => state.cart);

  return (
    <div className="cart-summary">
        <h2>Summary</h2>
        <ul className="cart-items">
            {guestCart.items.map((cart) => (
                <li className="cart-item-summary" key={cart.id}>
                    <span className="item-name">{cart.itemObject.itemTitle}</span>
                    <span className="item-quantity">{cart.quantity}</span>
                    <span className="item-price">{cart.itemObject.itemPrice}</span>
                </li>
            ))}
        </ul>
        <div className="cart-total">
            <span>Total:</span>
            <span>{totalPrice}</span>
        </div>
    </div>
  )
}
