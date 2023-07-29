import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { CButton } from '@coreui/react';
import axios from 'axios';
export default function AddForm() {
  const [label, setLabel] = useState('Select your image');
  const [previewSrc, setPreviewSrc] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  
  const fileChangedHandler = (event) => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    setSelectedFile(file);

    setLabel('File uploaded');

    const objectURL = URL.createObjectURL(file);
    setPreviewSrc(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }

  const handleSubmit = async () => {
    const data = {
      imageData: selectedFile,
      itemTitle,
      itemDescription: description,
    }

    axios.post('http://localhost:8080/api/shop/add-item', data, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="form-container">
        <h3 id="form-header">Add new Item</h3>
          <Form>
            
            <Form.Group className="mb-3">
              <Form.Label>Craft Title</Form.Label>
              <Form.Control type="title" placeholder="Example: Holiday Cups" onChange={(e) => setItemTitle(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} style={{resize: 'none'}} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="custom-file-upload">
                  <input type="file" id="file-upload" name="myImage" accept="image/png, image/gif, image/jpeg" 
                   onChange={fileChangedHandler}/>
                  <label htmlFor="file-upload">{label}</label>
              </div>
            </Form.Group>

            <CButton type="button" color="primary" id="submit" onClick={handleSubmit}>Submit</CButton>
          </Form>
      </div>

      <div className="preview-container" style={{marginTop: "100px"}}>
                <h3>Image preview</h3>
                {previewSrc !== null ? <img src={previewSrc} alt="Preview image"/> : null}
      </div>
    </>
  )
}
