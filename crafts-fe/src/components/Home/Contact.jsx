import React from 'react'
import { Form } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
        <div className="contact-me">
        <Form>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                <Form.Label>Email Body</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button type="submit" id="send">Send</button>
        </Form>
        </div>
    </>
  )
}
