import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Modal from 'react-bootstrap/Modal';

const pbKey = loadStripe("pk_test_51NcYrsEiypvGVayro5rvWMvgPNeOEAOIvxYRx5hfksFXJeV2pPUcDZtlrCeHT6Ds4CW5bDc5azrj8CCvPF2yxHd600ETzXz5Oh");


export default function PaymentProcess( {isOpen, onClose} ) {
  return (
    <>
        <Elements stripe={pbKey}>
            <Modal show={isOpen} onHide={onClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CheckoutForm />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={onClose}>Close</button>
                </Modal.Footer>
            </Modal>
            
        </Elements>
    </>
  )
}
