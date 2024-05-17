import React from "react";
import { districtToBorough } from "../helper";
import { Link } from "react-router-dom";

const SchoolListing = ({ schools }) => {
  return (
    <div className="grid grid-cols-3 gap-8 m-8">
      {schools.map((school, index) => (
        <div
          className="rounded-lg border-2 border-black bg-ghost-white font-semibold"
          key={index}
        >
          <div className="flex flex-col">
            <p className="text-center p-1">{school.school}</p>
            <p className="text-center p-1">{school.school_level_}</p>
            <p className="text-center p-1">
              {districtToBorough(school.district)}
            </p>
            <div className="flex justify-end bg-paynes-gray">
              <button className="m-2 p-1 border-2 border-black bg-light-blue rounded-lg hover:font-extrabold">
                <Link to={`/schools/${school.school}`}>View Details...</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolListing;
