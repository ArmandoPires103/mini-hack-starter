import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import SchoolListing from "./SchoolListing";
import SchoolDetails from "./SchoolDetails";
import SchoolSearch from "./SchoolSearch";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/schools" element={<SchoolListing />} />
          <Route path="/schools/:name" element={<SchoolDetails />} />
          <Route path="/find" element={<SchoolSearch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
