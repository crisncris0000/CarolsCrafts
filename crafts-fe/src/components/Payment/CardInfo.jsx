import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

export default function PaymentForm() {
    const stripeElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#32325d',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
            }
        },
    };

    return (
        <div className="payment-info">
            <h2>Payment info</h2>
            <label className="input-label">
                Card number
                <CardNumberElement options={stripeElementOptions} />
            </label>
            <label className="input-label">
                Expiration date
                <CardExpiryElement options={stripeElementOptions} />
            </label>
            <label className="input-label">
                CVC
                <CardCvcElement options={stripeElementOptions} />
            </label>
        </div>
    );
}
