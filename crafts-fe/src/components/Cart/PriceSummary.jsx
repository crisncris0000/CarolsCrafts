import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function PriceSummary() {
  const guestId = localStorage.getItem('guestId');
  const user = useSelector(state => state.user.value);
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => {
    if(guestId) {
      calculateGuestTotal(cart);
      getGuestItemCount(cart);
    } else {
      getUserTotal(user);
    }
  }, [cart])

  function calculateGuestTotal(cart) {
    let total = 0;
    cart.items.forEach((item) => {
        total += item.itemObject.itemPrice * item.quantity;
    });
    setTotalPrice(total);
  }

  function getGuestItemCount(cart) {
    let num = 0;
    cart.items.forEach((item) => {
      num++;
      if(item.quantity > 1) {
        num += item.quantity - 1;
      }
    })
    setTotalItems(num);
  }

  function getUserTotal(user) {
    axios.get(`http://localhost:8080/api/users/cart/get-total?id=${user.id}`)
        .then(response => setTotalPrice(response.data))
        .catch(error => console.log(error));
  }

  return (
    <>
        <div className="summary-container">
            <h4>Summary</h4>
            <div className="summary-body">
              <h5>Items total: {totalItems}</h5>
              <h5>Total Price: ${totalPrice}</h5>
              <button className=''>Order</button>
            </div>
        </div>
    </>
  )
}
