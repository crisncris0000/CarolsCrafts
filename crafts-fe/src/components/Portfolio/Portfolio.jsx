import React from 'react';
import PortfolioPost from './PortfolioPost';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Portfolio() {
  const user = useSelector(states => states.user.value);
  return ( 
    <>
      <div className="portfolio-header">
        <h1>Work</h1>
        
        {user.role === 'ADMIN' ? <Link to={'/new-post'}><button>Add new Post</button></Link> : null}
      </div>
      <div className="portfolio-container">
        <PortfolioPost />
      </div>
    </>
  );
}

