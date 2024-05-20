import { Apple } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="border border-black border-opacity-100 bg-light-blue">
      <div className="flex justify-center items-center">
        <h1 className="text-black text-center py-6 text-4xl text-shadow">
          Big Apple Schools!
        </h1>
        <Apple
          className="text-red-500"
          size={38}
          fill="red"
          stroke="black"
          strokeWidth={2}
        />
      </div>
      <div>
        <ul className="flex flex-row place-content-evenly text-xl font-bold text-paynes-gray">
          <Link to="/">
            <li className="list-none hover:text-black hover:underline">Home</li>
          </Link>
          <Link to="/schools">
            <li className="list-none hover:text-black hover:underline">
              All Schools
            </li>
          </Link>
          <Link to="/find">
            <li className="list-none hover:text-black hover:underline">
              Find a School
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
