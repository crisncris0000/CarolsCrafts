import { CButton } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Success from '../Messages/Success';
import Error from '../Messages/Error';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [body, setBody] = useState('');

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () =>{

    const formData = {
      email,
      firstName,
      lastName,
      body,
    }

    axios.post('http://localhost:8080/send-email', formData)
        .then((response) => {
          setSuccess(true);
          setSuccessMessage(response.data);
        })
        .catch((error) => {
          setError(true);
          setErrorMessage(error.response ? error.response.data : "Error sending email");
        })
  }

  useEffect(() => {
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
  }, [success], [error])

  return (
    <>
      {success ? <Success message={successMessage} /> : null}
      {error ? <Error message={errorMessage} /> : null}
      <div className="contact-me">
        <h4>Wanna get in touch? Have an order you don't see? Shoot me an email</h4>
        <div className="contact-form">
          <Form>
            <Form.Group className="mb-3 name-group">
              <Form.Label>Name *</Form.Label>
                <div className="name-fields-container">
                  <Form.Control type="first-name" placeholder="First Name" id="first-name" value={firstName} required onChange={(e) => setFirstName(e.target.value)}/>
                  <Form.Control type="last-name" placeholder="Last Name" id="last-name" value={lastName}  required onChange={(e) => setlastName(e.target.value)}/>
                </div>
            </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address *</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"  id="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Body *</Form.Label>
                <Form.Control as="textarea" rows={3} id="body" value={body} required onChange={(e) => setBody(e.target.value)}/>
              </Form.Group>
            <CButton type="button" onClick={handleSubmit}>Send</CButton>
          </Form>
        </div>
      </div>
    </>
  )
}
