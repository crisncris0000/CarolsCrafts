import React from 'react';
import Form from 'react-bootstrap/Form';
import { CButton } from '@coreui/react';
export default function AddForm() {
  return (
    <>
      <div className="form-container">
        <h3 id="form-header">Add new Item</h3>
          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Craft Title</Form.Label>
              <Form.Control type="title" placeholder="Example: Holiday Cups" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} style={{resize: 'none'}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Image of what you made</Form.Label>
              <input type="file" id="image-upload" accept="image/*"/>
            </Form.Group>

            <CButton type="submit" color="primary" id="submit">Submit</CButton>
          </Form>
      </div>
    </>
  )
}
