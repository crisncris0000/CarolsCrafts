import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Success from '../Messages/Success';
import Error from '../Messages/Error';

export default function NewPost() {
    const [label, setLabel] = useState('Select your image');
    const [previewSrc, setPreviewSrc] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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

    const submitHandler = async () => {
        try {
            const formData = new FormData();
            formData.append('myImage', selectedFile);

            const response = await axios.post('http://localhost:8080/api/portfolio/create-post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage(response.data);
            setSuccess(true);
        } catch (error) {
            setError(true)
            setErrorMessage('Error adding a post');
        }
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

    return (
        <>
            {success ? <Success message={successMessage} /> : null}
            {error ? <Error message={errorMessage} /> : null}
            
            <div className="form-container">
                <form>
                    <div className="custom-file-upload">
                        <input type="file" id="file-upload" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={fileChangedHandler}/>
                        <label htmlFor="file-upload">{label}</label>
                    </div>

                <button type="button" className="submit" onClick={submitHandler} id="submit">Submit</button>
                </form> 
            </div>
            
            <div className="preview-container" style={{marginTop: "100px"}}>
                <h3>Image preview</h3>
                {previewSrc !== null ? <img src={previewSrc} className="preview-img"/> : null}
            </div>
      </>
    )
  }
