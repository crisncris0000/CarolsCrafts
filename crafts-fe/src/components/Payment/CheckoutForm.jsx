import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const total = location.state.total;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;