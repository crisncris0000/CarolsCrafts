import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

export default function CartSummary() {
    const [cart, setCart] = useState([]);
    const user = useSelector(state => state.user.value);
    const guestCart = useSelector((state) => state.cart);

    const location = useLocation();
    const totalPrice = location.state.totalPrice;


    useEffect(() => {
        if(user.isGuest) {
            getGuestCart();
        } else {
            getUserCart();
        }
    }, []);

    function getUserCart() {
        axios.get(`http://localhost:8080/api/users/cart/user-cart?id=${user.id}`)
            .then(response => setCart(response.data))
            .catch(error => console.log(error));
    }

    function getGuestCart() {

    }

    return (
    <div className="cart-summary">
        <h2>Summary</h2>
        <ul className="cart-items">
            {cart.map((cart) => (
                <li className="cart-item-summary" key={cart.id}>
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
