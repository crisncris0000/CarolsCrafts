import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardInfo from './CardInfo';
import CartSummary from './CartSummary';
import Customerinfo from './Customerinfo';
import Error from '../Messages/Error';

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

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const formData = {
        firstName,
        lastName,
        email,
        address,
        countryCode,
        state,
        city,
        totalPrice,
    };

    axios.post('http://localhost:8080/api/stripe/create-payment', formData)
        .then(response => setClientSecret(response.data))
        .catch(error => {
            setError(true);
            setErrorMessage(error.data);
        });

    if (error) {
        const timer = setTimeout(() => {
            setError(false);
        }, 1500);
        return () => clearTimeout(timer); 
    }
  }, []);

  async function handleSubmitForm(event) {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
        return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    
    const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: cardNumberElement,
            billing_details: {
                name: `${firstName} ${lastName}`,
                email: email
            }
        }
    });

    if (result.error) {
        setError(true);
        setErrorMessage(result.error.message);
        return;
    }

    console.log(result);
  }


  return (
    <>
    {error ? <Error message={errorMessage}/> : null}
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

          <button type="submit" id="submit" className="submit-btn">Submit</button>
        </form>
    </div>
    </>
  )
}
