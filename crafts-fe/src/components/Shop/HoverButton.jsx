import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../features/cart';

export default function HoverButton({ defaultText, hoveredText, itemObject }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    localStorage.setItem('guestCart', JSON.stringify(cart.items));
  }, [cart]);

  const handleAddToCart = () => {
    dispatch(addItemToCart({itemObject, quantity: 1}));
  }

  return (
    <>
      <button onMouseOver={() => {setIsHovered(true)}} onMouseOut={() => {setIsHovered(false)}} className="delete-btn"
      onClick={handleAddToCart}>
        {isHovered ? hoveredText : defaultText}
      </button>
    </>
  )
}
