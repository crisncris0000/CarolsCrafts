import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function MoreInfo( {cart} ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  return (
    <>
      <Button className="custom-modal-button" onClick={handleShow}>
        More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Customization:</h5>
          <p>{cart.userCustomization}</p>
          <h5>quantity: {cart.quantity}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
