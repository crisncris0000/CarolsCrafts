import React from 'react';
import PortfolioPost from './PortfolioPost';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-header">
        <h1>Work</h1>
      </div>
      <div className="portfolio-container">
        <PortfolioPost />
      </div>
    </>
  );
}

