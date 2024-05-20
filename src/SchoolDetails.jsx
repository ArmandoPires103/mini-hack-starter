import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Chart from "../Chart";
import Modal from "./Modal";
import { districtToBorough, schoolRanking } from "../helper";

const SchoolDetails = () => {
  const { name } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comparisonSchool, setComparisonSchool] = useState(null);
  const [singleSchool, setSingleSchool] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await fetch(
          `https://data.cityofnewyork.us/resource/ffnc-f3aa.json?$limit=1500`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch school");
        }
        const data = await response.json();
        setSingleSchool(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSchool();
  }, [name]);
  console.log(singleSchool);

  useEffect(() => {
    fetch(`https://data.cityofnewyork.us/resource/ffnc-f3aa.json?$limit=1500`)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data);
      });
  }, []);

  const decodedName = decodeURIComponent(name);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredSchools = singleSchool.filter(
    (school) => school.school === decodedName
  );
  console.log(filteredSchools);

  if (filteredSchools.length === 0) {
    return <div>School not found</div>;
  }

  const school = filteredSchools[0];

  const scores = [
    school._overall_score,
    school._environment_category_score,
    school._performance_category_score,
    school._progress_category_score,
  ];

  const handleCompare = (selectedSchool) => {
    setComparisonSchool(selectedSchool);
    setIsModalOpen(false);
  };
  const removeComparisonSchool = () => {
    handleCompare(null);
  };

  return (
    <div>
      {/* School details */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            flex: "1",
          }}
        >
          <h2>{school.school}</h2>
          <p>
            <strong>Principal:</strong> {school.principal}
          </p>
          <p>
            <strong>School Level:</strong> {school.school_level_}
          </p>
          <p>
            <strong>Borough:</strong> {districtToBorough(school.district)}
          </p>
          <p>
            <strong>Overall Grade:</strong> {school._overall_grade}
          </p>
          <p>
            <strong>Ranking: </strong>
            {schools.length > 0 && schoolRanking(schools, school)}
          </p>
          <Chart scores={scores} />
          {/* Compare button below the nav bar */}
          <div style={{ margin: "10px", paddingLeft: "10px" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "black",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Compare
            </button>
          </div>
        </div>
        {comparisonSchool && (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              flex: "1",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>{comparisonSchool.school}</h2>
              <button
                style={{
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={removeComparisonSchool}
              >
                X
              </button>
            </div>
            <p>
              <strong>Principal:</strong> {comparisonSchool.principal}
            </p>
            <p>
              <strong>School Level:</strong> {comparisonSchool.school_level_}
            </p>
            <p>
              <strong>Borough:</strong>{" "}
              {districtToBorough(comparisonSchool.district)}
            </p>
            <p>
              <strong>Overall Grade:</strong> {comparisonSchool._overall_grade}
            </p>
            <p>
              <strong>Ranking: </strong>
              {schools.length > 0 && schoolRanking(schools, comparisonSchool)}
            </p>
            <Chart
              scores={[
                comparisonSchool._overall_score,
                comparisonSchool._environment_category_score,
                comparisonSchool._performance_category_score,
                comparisonSchool._progress_category_score,
              ]}
            />
          </div>
        )}
      </div>

      {/* Modal for selecting schools to compare */}
      {isModalOpen && (
        <Modal
          schools={singleSchool}
          onSelect={handleCompare}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SchoolDetails;
