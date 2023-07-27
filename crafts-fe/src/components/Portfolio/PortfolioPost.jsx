import React, { useEffect, useState } from 'react';
import TrashIcon from '../../images/delete-icon.png';
import CakeTopper from '../../images/cake-topper.png';
import axios from 'axios';

export default function PortfolioPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio/get-posts')
          .then((response) => {
            setPosts(response.data);
            console.log(response.data);
          }).catch((error) => {
            console.log(error);
          })
  }, [])

  return (
    <>

          {posts.map((post) => (
          <div className="post-container" key={post.id}>  
            <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button>
            <div className="img-container">
              <img src={`data:${post.mimeType};base64,${post.imageData}`} className="main-image" alt="Main" />
            </div>
          </div>
          ))}

    </>
  )
}
