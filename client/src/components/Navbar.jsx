import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">📖 TaleTracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-600">Home</Link>
        <Link to="/login" className="hover:text-yellow-600">Login</Link>
        <Link to="/signup" className="hover:text-yellow-600">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
