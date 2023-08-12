import { useStripe, useElements, CardElement, CardNumberElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CardInfo from './CardInfo';
import CartSummary from './CartSummary';
import Customerinfo from './Customerinfo'

export default function Checkout() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [state, setState] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [city, setCity] = useState('');

  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmitForm(event) {
    event.preventDefault();

    if (!stripe || !elements) {
        console.error("Stripe has not loaded yet.");
        return;
    }
    const cardNumberEleement = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(cardNumberEleement);
    
    if (result.error) {
        console.error(result.error);
        return;
    }

    const token = result.token.id;

    const formData = {
      firstName,
      lastName,
      email,
      address,
      countryCode,
      state,
      city,
      totalPrice,
      token,
    };

    axios.post('http://localhost:8080/api/stripe/create-payment', formData)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}


  return (
    <div className="checkout-container">
        <form onSubmit={handleSubmitForm}>
          <Customerinfo 
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            address={address}
            setAddress={setAddress}
            setEmail={setEmail}
            country={country}            
            setCountry={setCountry}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            state={state}
            setState={setState}
            stateCode={stateCode}
            setStateCode={setStateCode}
            city={city}
            setCity={setCity}
          />

          <CardInfo />

          <CartSummary />

          <button type="submit">Submit</button>
        </form>
    </div>
  )
}
