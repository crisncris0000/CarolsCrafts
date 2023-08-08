import React, { useEffect, useState } from 'react';
import PaymentProcess from '../Payment/PaymentProcess';

export default function PriceSummary( {cart, user} ) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

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

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="summary-container">
          <h4>Summary</h4>
          <div className="summary-body">
            <h5>Items total: {totalItems}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            <button onClick={handleOpen}>Order</button>
            {isModalOpen && <PaymentProcess isOpen={isModalOpen} onClose={handleClose}/>}
          </div>
      </div>
    </>
  )
}
