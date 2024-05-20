import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SchoolSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/ffnc-f3aa.json?$limit=1500")
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setFilteredData(data);
      })
      .catch((err) => console.error("Error on fetch", err));
  }, []);

  const handleSearchChange = async (e) => {
    const query = await e.target.value.toLowerCase();
    setSearchTerm(query);
    const filtered = await results.filter((item) =>
      item.school?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="search-container p-4">
      <h1 className="text-center mb-8 text-2xl text-shadow-sm">Find a Single School</h1>
      <div className="flex justify-center items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search ..."
        className="border border-black border-2 rounded-lg p-2 mb-4 w-full max-w-md"
      />
       </div>
      <div>
        {!searchTerm ? (
          <h2 className="text-center">Please Enter a School ...</h2>
        ) : (
          <ul>
            {filteredData.map((school, id) => (
              <Link to={`/schools/${school.school}`}>
                <li
                  key={id}
                  className="rounded-lg border-2 border-black bg-ghost-white font-semibold p-4"
                >
                  <h2>{school.school}</h2>
                  <p>Principal: {school.principal}</p>
                  <p>Grade Level: {school.school_level_}</p>
                  <p>Overall Rating: {school._overall_grade}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SchoolSearch;
