import { useEffect, useState } from "react";
import { districtToBorough } from "../helper";
import { Link } from "react-router-dom";
import BoroughFilter from "./BoroughFilter";

const SchoolListing = () => {
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [schools, setSchools] = useState([]);
  const [schoolCounter, setSchoolCounter] = useState(0);

  const URL = `${import.meta.env.VITE_BASE_URL}?$limit=1500`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data);
        setSelectedSchools(data);
      });
  }, []);

  useEffect(() => {
    setSchoolCounter(selectedSchools.length);
  }, [selectedSchools]);

  console.log(selectedSchools);

  return (
    <div className="mb-24">
      <div className="mx-4 mt-4">
        <h1 className="text-xl font-semibold">
          {/* {selectedSchools.length > 0 &&
            `${districtToBorough(
              selectedSchools[0].district
            )} Schools: ${schoolCounter}`} */}

          {selectedSchools.length > 0 && selectedSchools.length < 600
            ? `${districtToBorough(
                selectedSchools[0].district
              )} Schools: ${schoolCounter}`
            : `All NYC Schools: ${schoolCounter}`}
        </h1>
      </div>
      <div className="flex mr-4 h-screen">
        <div className="w-1/6 mt-4">
          <BoroughFilter
            schools={schools}
            setSchools={setSchools}
            selectedSchools={selectedSchools}
            setSelectedSchools={setSelectedSchools}
          />
        </div>
        <div className="w-5/6 overflow-y-auto h-full">
          <div className="grid grid-cols-3 gap-8 p-4">
            {selectedSchools &&
              selectedSchools.map((school, index) => (
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
                      <Link to={`/schools/${school.school}`}>
                        View Details...
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolListing;
