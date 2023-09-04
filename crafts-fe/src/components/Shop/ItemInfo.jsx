import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from '../../features/cart';

export default function ItemInfo( {itemObject} ) {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user.value);
  const guest = localStorage.getItem('guestId');

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [userCustomization, setUserCustomization] = useState('');

  useEffect(() => {
    localStorage.setItem('guestCart', JSON.stringify(cart.items));
    
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 1500);

      return () => clearTimeout(timer); 
    }

    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 1500);

      return () => clearTimeout(timer); 
    }
  }, [cart, success, error]);

  const handleAddToCart = () => {
    if (guest) {
      dispatch(addItemToCart({ itemObject, userCustomization, quantity: 1 }));
    } else {
      axios
        .post(
          "http://localhost:8080/api/users/cart/add-to-cart",
          { userId: user.id, itemId: itemObject.id, userCustomization }
        ).then((response) => {
          setSuccess(true);
          setSuccessMessage(response.data);
        }).catch((error) => {
          setError(true);
          setErrorMessage(error.response.data);
        });
    }
  };

  return (
    <>
    
      <Button onClick={handleShow} className="custom-modal-button">
        <b>More Info</b>
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Item Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Item Price: ${itemObject.itemPrice}</h5>
            <h5 style={{marginTop: "20px"}}>Description:</h5>
            <p>{itemObject.itemDescription}</p>
            <h5>Personal customization</h5>
            <textarea className="user-description" 
            placeholder="Please enter the size if applicable and what you would like on it" 
            onChange={(e) => setUserCustomization(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}
