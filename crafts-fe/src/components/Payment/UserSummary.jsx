import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

export default function UserSummary() {
    const [cart, setCart] = useState([]);
    const location = useLocation();
    const totalPrice = location.state.totalPrice;
    const user = useSelector(state => state.user.value);

    useEffect(() => {
        getUserCart();
    }, [user.id]);

    function getUserCart() {
        axios.get(`http://localhost:8080/api/users/cart/user-cart?id=${user.id}`)
            .then(response => setCart(response.data))
            .catch(error => console.log(error));
    }
  return (
    <div className="cart-summary">
        <h2>Summary</h2>
        <ul className="cart-items">
            {cart.map((cart, index) => (
                <li className="cart-item-summary" key={`${cart.item.id}-${index}`}>
                    <span className="item-name">{cart.item.itemTitle}</span>
                    <span className="item-quantity">{cart.quantity}</span>
                    <span className="item-price">{cart.item.itemPrice}</span>
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
