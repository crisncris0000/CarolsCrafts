import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../features/cart';

export default function HoverButton({ defaultText, hoveredText, itemObject }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user.value);
  const guest = localStorage.getItem('guestId');

  useEffect(() => {
    localStorage.setItem('guestCart', JSON.stringify(cart.items));
  }, [cart]);

  const handleAddToCart = () => {
    if (guest) {
      dispatch(addItemToCart({ itemObject, quantity: 1 }));
    } else {
      axios
        .post(
          "http://localhost:8080/api/users/cart/add-to-cart",
          { userId: user.id, itemId: itemObject.id }
        )
        .then((response) => {
          console.log(response);
        }).catch((error) => console.log(error));
    }
  };
  

  return (
    <>
      <button onMouseOver={() => {setIsHovered(true)}} onMouseOut={() => {setIsHovered(false)}} className="delete-btn"
      onClick={handleAddToCart}>
        {isHovered ? hoveredText : defaultText}
      </button>
    </>
  )
}
