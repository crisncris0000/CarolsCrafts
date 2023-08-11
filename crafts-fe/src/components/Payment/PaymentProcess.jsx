import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

const pbKeyPromise = loadStripe("pk_test_51NcYrsEiypvGVayro5rvWMvgPNeOEAOIvxYRx5hfksFXJeV2pPUcDZtlrCeHT6Ds4CW5bDc5azrj8CCvPF2yxHd600ETzXz5Oh");


export default function PaymentProcess() {
  return (
    <>
      <Elements stripe={pbKeyPromise}>
        <Checkout />
      </Elements>
    </>
  )
}
