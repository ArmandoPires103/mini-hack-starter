import React, { useEffect, useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import SchoolListing from "./SchoolListing";
import SchoolDetails from "./SchoolDetails";
import SchoolSearch from "./SchoolSearch";

const App = () => {
  const [schools, setSchools] = useState([]);

  const URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schools" element={<SchoolListing />} />
        <Route path="/schools/:id" element={<SchoolDetails />} />
        <Route path="/find" element={<SchoolSearch />}/>
      </Routes>
    </div>
  );
};

export default App;
