import moment from "moment";
import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div>
        <img className="w-[300px]" src={Logo} alt="logo text" />
      </div>
      <h4 className="text-gray-400 my-3">Journalism Without Fear or Favour</h4>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
