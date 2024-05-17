import React from "react";
import { useParams } from "react-router-dom";
import Chart from "../Chart";

const SchoolDetails = ({ schools }) => {
  const { name } = useParams();
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

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{school.school}</h2>
      <p><strong>Principal:</strong> {school.principal}</p>
      <p><strong>School Level:</strong> {school.school_level_}</p>
      <p><strong>District:</strong> {school.district}</p>
      <p><strong>Overall Grade:</strong> {school._overall_grade}</p>
      <Chart scores={scores} />
    </div>
  );
};

export default SchoolDetails;

