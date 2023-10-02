import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { CButton } from '@coreui/react';
import axios from 'axios';
import Success from '../Messages/Success';
import Error from '../Messages/Error';
import { useSelector } from 'react-redux';
import Unauthroized from '../Messages/Unauthorized';
import Compressor from 'compressorjs';

export default function AddForm() {
  const [label, setLabel] = useState('Select your image');
  const [previewSrc, setPreviewSrc] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [price, setPrice] = useState(0);
  
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const user = useSelector(state => state.user.value);

  
  const fileChangedHandler = (event) => {
      const file = event.target.files[0];

      if (!file) {
          return;
      }

      new Compressor(file, {
          quality: 0.7,
          success(result) {
              setSelectedFile(result);

              setLabel('File uploaded');

              const objectURL = URL.createObjectURL(result);
              setPreviewSrc(objectURL);
          },
          error(err) {
              console.error('[Compressor.js] Error:', err.message);
          },
      });
  };


  const handleSubmit = async () => {
    const data = {
      imageData: selectedFile,
      itemTitle,
      itemDescription: description,
      itemPrice: price
    }

    axios.post('http://localhost:8080/api/shop/add-item', data, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then((response) => {
      setSuccessMessage(response.data);
      setSuccess(true);
    }).catch((error) => {
      setError(true);
      setErrorMessage(error.response ? error.response.data : "Error adding form");
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
  }, [success, error]);

    if(user.role === 'ADMIN'){
      return(
      <>
        {success ? <Success message={successMessage}/> : null}
        {error ? <Error message={errorMessage} /> : null}
        <div className="form-container">
          <h3 id="form-header">Add new Item</h3>
            <Form className="add-form">
              <Form.Group className="mb-3">
                <Form.Label>Craft Title</Form.Label>
                <Form.Control type="title" placeholder="Example: Holiday Cups" onChange={(e) => setItemTitle(e.target.value)}/>
              </Form.Group>
                
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} style={{resize: 'none'}} onChange={(e) => setDescription(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" style={{resize: 'none'}} onChange={(e) => setPrice(e.target.value)}/>
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
          {previewSrc !== null ? <img src={previewSrc} alt="Preview image" className="preview-img"/> : null}
        </div>
      </>
      )
    } else {
      return (
        <>
          <Unauthroized />
        </>
      )
    }
}
