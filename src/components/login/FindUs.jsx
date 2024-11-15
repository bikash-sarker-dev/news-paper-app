import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Find Us On</h3>
      <div className="join join-vertical   w-full *:bg-base-100 mt-2">
        <button className="btn join-item justify-start  ">
          {" "}
          <FaFacebookF /> Facebook
        </button>
        <button className="btn join-item justify-start ">
          {" "}
          <FaTwitter /> Twitter
        </button>
        <button className="btn join-item justify-start ">
          {" "}
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
