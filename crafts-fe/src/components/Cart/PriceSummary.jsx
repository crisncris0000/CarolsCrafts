import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function PriceSummary() {
  const guestId = localStorage.getItem('guestId');
  const cart = useSelector((state) => state.cart);
  const [guestTotal, setGuestTotal] = useState(0);
  
  useEffect(() => {
    if(guestId) {
      calculateGuestTotal(cart);
    }
  }, [cart])

  function calculateGuestTotal(cart) {
    let total = 0;
    cart.items.forEach((item) => {
        total += item.itemObject.itemPrice * item.quantity;
    });
    setGuestTotal(total);
  }

  return (
    <>
        <div className="summary-container">
            <h4>Summary</h4>

            <div className="summary-body">
              <h5>Items total: {null}</h5>
              <h5>Total Price: {guestTotal}</h5>
              <button className=''>Order</button>
            </div>
        </div>
    </>
  )
}
