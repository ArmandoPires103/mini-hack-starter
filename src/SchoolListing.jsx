import React from "react";
import { districtToBorough } from "../helper";
import { Link } from "react-router-dom";
import BoroughFilter from "./BoroughFilter";

const SchoolListing = ({ schools, setSchools }) => {
  return (
    <div className="mr-4 grid grid-cols-6">
      <div className="grid col-span-1">
        <BoroughFilter schools={schools} setSchools={setSchools} />
      </div>

      <div className="grid col-span-5">
        <div className="grid grid-cols-3 gap-8">
          {schools &&
            schools.map((school, index) => (
              <div
                className="rounded-lg border-2 border-black bg-ghost-white font-semibold h-full flex flex-col"
                key={index}
              >
                <div className="flex-grow">
                  <p className="text-center p-1">{school.school}</p>
                  <p className="text-center p-1">{school.school_level_}</p>
                  <p className="text-center p-1">
                    {districtToBorough(school.district)}
                  </p>
                </div>
                <div className="flex justify-end bg-paynes-gray">
                  <button className="m-2 p-1 border-2 border-black bg-light-blue rounded-lg hover:font-extrabold">
                    <Link to={`/schools/${index}`}>View Details...</Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolListing;
