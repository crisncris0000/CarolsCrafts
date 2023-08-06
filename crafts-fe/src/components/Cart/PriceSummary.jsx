import React, { useEffect, useState } from 'react';

export default function PriceSummary( {cart, user} ) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!user.isGuest) {
      handleUserPrice();
    } else {
      handleGuestPrice();
    }

  }, [cart])


  function handleUserPrice() {
    let price = 0;
    cart.map((cart) => {
      price += cart.item.itemPrice * cart.quantity;
    })
    setTotal(price);
  }

  function handleGuestPrice() {
    let price = 0;
  
    cart.items.forEach(item => {
      price += item.itemObject.itemPrice * item.quantity;
    });
    
    setTotal(price);
  }

  return (
    <>
      <div className="summary-container">
          <h4>Summary</h4>
          <div className="summary-body">
            <h5>Items total: {0}</h5>
            <h5>Total Price: ${total}</h5>
            <button className=''>Order</button>
          </div>
      </div>
    </>
  )
}
