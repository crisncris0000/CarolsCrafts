import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PriceSummary( {cart, user} ) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user.isGuest) {
      handleUserCart();
    } else {
      handleGuestCart();
    }

  }, [cart])


  function handleUserCart() {
    let price = 0;
    let count = 0;
    cart.map((cart) => {
      price += cart.item.itemPrice * cart.quantity;
      count += cart.quantity;
    })
    setTotalPrice(price);
    setTotalItems(count);
  }

  function handleGuestCart() {
    let price = 0;
    let count = 0;
  
    cart.items.forEach(item => {
      price += item.itemObject.itemPrice * item.quantity;
      count += item.quantity;
    });
    
    setTotalPrice(price);
    setTotalItems(count);
  }

  const goToCheckout = () => {
    navigate("/checkout", {state: {totalPrice}})
  }

  return (
    <>
      <div className="summary-container">
          <h4>Summary</h4>
          <div className="summary-body">
            <h5>Items total: {totalItems}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            {totalPrice !== 0 ? <button onClick={goToCheckout}>Order</button> : null}
          </div>
      </div>
    </>
  )
}
