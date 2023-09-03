import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function TransactionInfo( {transactionId, description} ) {
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
          <Modal.Title>Transaction ID: {transactionId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{marginTop: "20px"}}>Summary:</h4>
          <p className="line-break">{description}</p>
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
