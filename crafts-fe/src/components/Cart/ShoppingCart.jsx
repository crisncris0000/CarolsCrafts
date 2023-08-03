import React from 'react';
import { useSelector } from 'react-redux';
import GuestHeader from './GuestHeader';
import ItemList from './ItemList';
import PriceSummary from './PriceSummary';

export default function ShoppingCart() {
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
        <GuestHeader />
        <ItemList />

        <PriceSummary />
    </div>
  )
}
