import React from 'react';
import PortfolioPost from './PortfolioPost';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-header">
        <h1>Work</h1>
        
        <Link to={'/new-post'}><button>Add new Post</button></Link>
      </div>
      <div className="portfolio-container">
        <PortfolioPost />
      </div>
    </>
  );
}

