import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Chart from "../Chart";
import Modal from "./Modal";

const SchoolDetails = ({ schools }) => {
  const { name } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comparisonSchool, setComparisonSchool] = useState(null);
  
  const decodedName = decodeURIComponent(name);
  
  if (!schools || schools.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredSchools = schools.filter(school => school.school === decodedName);

  if (filteredSchools.length === 0) {
    return <div>School not found</div>;
  }

  const school = filteredSchools[0];
  const scores = [
    school._overall_score,
    school._environment_category_score,
    school._performance_category_score,
    school._progress_category_score
  ];

  const handleCompare = (selectedSchool) => {
    setComparisonSchool(selectedSchool);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>{school.school}</h2>
        <p><strong>Principal:</strong> {school.principal}</p>
        <p><strong>School Level:</strong> {school.school_level_}</p>
        <p><strong>District:</strong> {school.district}</p>
        <p><strong>Overall Grade:</strong> {school._overall_grade}</p>
        <Chart scores={scores} />
        <button onClick={() => setIsModalOpen(true)}>Compare</button>
      </div>
      {isModalOpen && (
        <Modal
          schools={schools}
          onSelect={handleCompare}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {comparisonSchool && (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{comparisonSchool.school}</h2>
          <p><strong>Principal:</strong> {comparisonSchool.principal}</p>
          <p><strong>School Level:</strong> {comparisonSchool.school_level_}</p>
          <p><strong>District:</strong> {comparisonSchool.district}</p>
          <p><strong>Overall Grade:</strong> {comparisonSchool._overall_grade}</p>
          <Chart
            scores={[
              comparisonSchool._overall_score,
              comparisonSchool._environment_category_score,
              comparisonSchool._performance_category_score,
              comparisonSchool._progress_category_score
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default SchoolDetails;

