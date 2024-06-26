import React from "react";
import { useState } from "react";
import { districtToBorough } from "../helper";
import { X } from "lucide-react";

const BoroughFilter = ({
  schools,
  setSchools,
  selectedSchools,
  setSelectedSchools,
}) => {
  const [selectedBorough, setSelectedBorough] = useState("");

  // const originalSchools = schools;
  // console.log(originalSchools);

  function filterBasedOnBorough(event) {
    const values = event.target.value.split(",").map(Number);
    const borough = districtToBorough(values[0]);
    setSelectedBorough(borough);
    const filteredSchools = schools.filter((school) =>
      values.includes(+school.district)
    );
    // console.log(filteredSchools);
    setSelectedSchools(filteredSchools);
  }

  function removeFilteredBorough() {
    setSelectedBorough("");
    setSelectedSchools(schools);
  }

  return (
    <div className="text-center h-fit border-2 border-black mx-4 p-4 rounded-lg bg-ghost-white">
      <h1 className="font-bold">Filter By Borough:</h1>
      {selectedBorough && (
        <div className="flex justify-center items-center">
          <h1 className="font-bold">Current Filter: </h1>
          <button className="border-2 border-black m-2 p-1 rounded-lg flex items-center bg-light-blue">
            {`${selectedBorough}`}
            <X onClick={removeFilteredBorough} className="text-paynes-gray" />
          </button>
        </div>
      )}
      <div className="flex flex-col">
        <button
          className=" border-2 border-black m-2 p-1 rounded-lg bg-light-blue"
          value={[24, 25, 26, 27, 28, 29, 30]}
          onClick={filterBasedOnBorough}
        >
          Queens
        </button>
        <button
          className="border-2 border-black m-2 p-1 rounded-lg bg-light-blue"
          value={[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 32]}
          onClick={filterBasedOnBorough}
        >
          Brooklyn
        </button>
        <button
          className="border-2 border-black m-2 p-1 rounded-lg bg-light-blue"
          value={[1, 2, 3, 4, 5, 6]}
          onClick={filterBasedOnBorough}
        >
          Manhattan
        </button>
        <button
          className="border-2 border-black m-2 p-1 rounded-lg bg-light-blue"
          value={[7, 8, 9, 10, 11, 12]}
          onClick={filterBasedOnBorough}
        >
          Bronx
        </button>
        <button
          className="border-2 border-black m-2 p-1 rounded-lg bg-light-blue"
          value={31}
          onClick={filterBasedOnBorough}
        >
          Staten Island
        </button>
      </div>
    </div>
  );
};

export default BoroughFilter;
