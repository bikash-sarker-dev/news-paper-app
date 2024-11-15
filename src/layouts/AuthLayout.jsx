import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins ">
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
