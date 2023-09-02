import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function TransactionInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <h5>Item List</h5>
          <h5 style={{marginTop: "20px"}}>Description:</h5>
          <p>This is test</p>
          <h5></h5>
          <textarea className="user-description" 
          placeholder="Please enter the size if applicable and what you would like on it"/>
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
