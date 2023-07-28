import React, { useEffect, useState } from 'react';
import TrashIcon from '../../images/delete-icon.png';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function PortfolioPost() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((states) => states.user.value);

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
          {user.role === 'ADMIN' ? <button className="delete-icon"> <img src={TrashIcon} alt="Delete" /> </button> : null}
          <div className="img-container">
            <img src={`data:${post.mimeType};base64,${post.imageData}`} className="main-image" alt="Main" />
          </div>
        </div>
        
        ))}

    </>
  )
}
