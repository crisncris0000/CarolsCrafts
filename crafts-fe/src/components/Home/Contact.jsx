import { CButton } from '@coreui/react';
import React from 'react'
import { Form } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
        <div className="contact-me">
          <h4>Wanna get in touch? Have an order you don't see? Shoot me an email</h4>
          <div className="contact-form">
            <Form>
                <Form.Group className="mb-3 name-group">
                    <Form.Label>Name *</Form.Label>
                    <div className="name-fields-container">
                      <Form.Control type="first-name" placeholder="First Name" id="first-name" required/>
                      <Form.Control type="last-name" placeholder="Last Name" id="last-name"  required/>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"  id="email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email Body *</Form.Label>
                    <Form.Control as="textarea" rows={3} id="body" required/>
                </Form.Group>
                <CButton type="submit">Send</CButton>
            </Form>
          </div>
        </div>
    </>
  )
}
