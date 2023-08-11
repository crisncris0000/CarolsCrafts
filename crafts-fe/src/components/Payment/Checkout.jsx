import React, { useState } from 'react'
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

  

  return (
    <div className="checkout-container">
        <form>
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
        </form>
    </div>
  )
}
