import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="border border-black border-opacity-100 mt-8 m-4">
        <h1 className="text-gray-700 text-center pb-6 ">Big Apple Schools !</h1>
      <div>
        <ul className="flex flex-row place-content-evenly">
        <Link to="/"><li className="list-none">Landing</li></Link>
        <Link to="/schools"><li className="list-none">All Schools</li></Link>
        <Link to="/find"><li className="list-none">Find a School</li></Link>
        </ul>
      </div>
    </div>
  )
};

export default Nav;
