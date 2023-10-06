import React, { useEffect, useState } from 'react';
import TrashIcon from '../../images/delete-icon.png';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Error from '../Messages/Error';

export default function PortfolioPost() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((states) => states.user.value);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('https://api.mckcreation.com/api/portfolio/get-posts')
          .then((response) => {
            setPosts(response.data);
          }).catch(() => {
            setError(true);
            setErrorMessage('Error getting posts')
          })
          
          if (error) {
            const timer = setTimeout(() => {
              setError(false);
            }, 1500);
      
            return () => clearTimeout(timer); 
          }
  }, [posts, error])

  function handleDelete(itemId) {
    axios.delete(`https://api.mckcreation.com/api/portfolio/delete-post?id=${itemId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      {error ? <Error message={errorMessage} /> : null}
      
      {posts.map((post) => (
      <div className="post-container" key={post.id}>  
        {user.role === 'ADMIN' ? <button className="delete-icon" onClick={() => handleDelete(post.id)}> <img src={TrashIcon} alt="Delete" /> </button> : null}
      <div className="img-container">
        <img src={`data:${post.mimeType};base64,${post.imageData}`} className="main-image" alt="Main" />
      </div>
        </div>
        
        ))}

    </>
  )
}
