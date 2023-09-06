import {useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import CardInfo from './CardInfo';
import CartSummary from './CartSummary';
import Customerinfo from './Customerinfo';
import Error from '../Messages/Error';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../features/cart';


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
    const [formCompletion, setFormCompletion] = useState(false);

    const user = useSelector((state) => state.user.value);
    const guestCart = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (formCompletion) {
            const formData = {
                id: user.id,
                guestCartDTO: guestCart.items,
                firstName,
                lastName,
                email,
                address,
                countryCode,
                state,
                city,
                totalPrice
            };
            if (! user.isGuest) {
                handleUserSubmit(formData);
            } else {
                handleGuestSubmit(formData);
            }
            setFormCompletion(false);
        }
    }, [formCompletion]);


    function handleUserSubmit(formData) {
        axios.post('http://localhost:8080/api/payment/process-payment', formData).then(response => {
            setClientSecret(response.data);

            const cardNumberElement = elements.getElement(CardNumberElement);

            return stripe.confirmCardPayment(response.data, {
                payment_method: {
                    card: cardNumberElement,
                    billing_details: {
                        name: `${firstName} ${lastName}`,
                        email: email
                    }
                }
            });
        }).then(result => {
            if (result.error) {
                setError(true);
                setErrorMessage(result.error.message);
            } else {
                navigate('/');
            }
        }).catch(error => {
            setError(true);
            setErrorMessage(error.response ? error.response.data : error.message);
        });
    }

    function handleGuestSubmit(formData) {
        axios.post('http://localhost:8080/api/payment/process-payment/guest', formData).then(response => {
            setClientSecret(response.data);

            const cardNumberElement = elements.getElement(CardNumberElement);

            return stripe.confirmCardPayment(response.data, {
                payment_method: {
                    card: cardNumberElement,
                    billing_details: {
                        name: `${firstName} ${lastName}`,
                        email: email
                    }
                }
            });
        }).then(result => {
            if (result.error) {
                setError(true);
                setErrorMessage(result.error.message);
            } else {
                navigate('/');
                dispatch(clearCart());
            }
        }).catch(error => {
            setError(true);
            setErrorMessage(error.response ? error.response.data : error.message);
        });
    }

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 1500);
            return() => clearTimeout(timer);
        }
    }, [error]);

    function handleSubmitForm(event) {
        event.preventDefault();
        setFormCompletion(true);
    }

    return (
        <> {
            error ? <Error message={errorMessage}/> : null
        }
            <div className="checkout-container">
                <form onSubmit={handleSubmitForm}>
                    <Customerinfo firstName={firstName}
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
                        setCity={setCity}/>

                    <CardInfo/>

                    <CartSummary/>

                    <button type="submit" id="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}
