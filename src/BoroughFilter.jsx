import React from "react";

const BoroughFilter = ({ schools }) => {
  function filterBasedOnBorough(event) {
    console.log(event.target.value);
  }

  return (
    <div className="text-center h-fit border-2 border-black mx-4 p-4 rounded-lg">
      <h1 className="font-bold">Filter By Borough:</h1>
      <div className="flex flex-col">
        <button
          className=" border-2 border-black m-2 p-1"
          value={"Queens"}
          onClick={filterBasedOnBorough}
        >
          Queens
        </button>
        <button
          className="border-2 border-black m-2 p-1"
          value={"Brooklyn"}
          onClick={filterBasedOnBorough}
        >
          Brooklyn
        </button>
        <button
          className="border-2 border-black m-2 p-1"
          value={"Manhattan"}
          onClick={filterBasedOnBorough}
        >
          Manhattan
        </button>
        <button
          className="border-2 border-black m-2 p-1"
          value={"Bronx"}
          onClick={filterBasedOnBorough}
        >
          Bronx
        </button>
        <button
          className="border-2 border-black m-2 p-1"
          value={"Staten Island"}
          onClick={filterBasedOnBorough}
        >
          Staten Island
        </button>
      </div>
    </div>
  );
};

export default BoroughFilter;
