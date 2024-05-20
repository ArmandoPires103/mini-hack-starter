import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="heroTitle">Welcome to BigApple Schools</h1>
        <p className="heroSubtitle">Find The best schools in NYC</p>
        <Link to="/schools">
          <button className="ctaButton">Search Here</button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="w-screen">
        <div className="grid grid-cols-3 gap-8 text-center items-center">
          <div className="p-24 min-w-52">
            <h2 className="text-2xl font-semibold mb-2">Filter the Borough</h2>
            <p>Find the school in your preferred borough.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Search For The School
            </h2>
            <p>
              Search bar feature to help find the school you are looking for.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold mb-2">Compare</h2>
            <p>
              Compare feature helps you decide which school is best for you and
              your child.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
