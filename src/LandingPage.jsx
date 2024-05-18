import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="heroTitle">Welcome to BigApple Schools</h1>
        <p className="heroSubtitle">Find The best schools in NYC</p>
        <Link to="/schools" >
        <button className="ctaButton">Search Here</button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h2 className="featureTitle">Filter the Borough</h2>
          <p className="featureDescription">Find the school in your're prefered borough.</p>
        </div>
        <div className="feature">
          <h2 className="featureTitle">Search for the school</h2>
          <p className="featureDescription">Search bar feature to help find the school you are looking for.</p>
        </div>
        <div className="feature">
          <h2 className="featureTitle">Compare</h2>
          <p className="featureDescription">Compare feature helps you decide which school is best for you and you're child.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

