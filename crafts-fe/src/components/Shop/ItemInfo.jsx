import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from '../../features/cart';

export default function ItemInfo( {itemPrice, itemDescription, itemObject} ) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
  
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.value);
    const guest = localStorage.getItem('guestId');

    useEffect(() => {
        localStorage.setItem('guestCart', JSON.stringify(cart.items));
      }, [cart]);

    const handleAddToCart = () => {
        if (guest) {
          dispatch(addItemToCart({ itemObject, quantity: 1 }));
        } else {
          axios
            .post(
              "http://localhost:8080/api/users/cart/add-to-cart",
              { userId: user.id, itemId: itemObject.id }
            )
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
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
            <h5>Item Price: ${itemPrice}</h5>
            <h5 style={{marginTop: "20px"}}>Description:</h5>
            <p>{itemDescription}</p>
            <h5>Personal customization</h5>
            <textarea className="user-description" placeholder="Please enter the size if applicable and what you would like on it"></textarea>
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
