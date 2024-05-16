import React from "react";

const SchoolListing = ({ schools }) => {
  return (
    <div className="grid grid-cols-3 gap-8 m-8">
      {schools.map((school) => (
        <div className="border-2 border-black" key={school.dbn}>
          <div className="flex flex-col">
            <p className="text-center p-1">{school.school}</p>
            <p className="text-center p-1">{school.school_level_}</p>
            <p className="text-center p-1">{school.district}</p>
            <div className="flex justify-end">
              <button className="m-2 p-1 border-2 border-black">
                View More...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolListing;
