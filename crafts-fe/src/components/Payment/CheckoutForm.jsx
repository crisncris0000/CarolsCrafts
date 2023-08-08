import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const total = location.state.total;
  const user = useSelector(state => state.user.value);

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
      <h3>Total: {total}</h3>
      <div className="card-payment-container">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      
      {user.isGuest ?
      <>
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
    </>
    : 
    <>
      <input 
      type="text"
      placeholder={`${user.firstName} ${user.lastName}`}
      value={name}
      disabled={true}
      />
    
      <input
        type="email"
        placeholder={`${user.email}`}
        value={email}
        disabled={true}
      />
   </> 
    }

      <input 
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit" disabled={!stripe}>
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;