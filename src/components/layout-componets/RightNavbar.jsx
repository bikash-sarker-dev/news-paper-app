import React from "react";
import FindUs from "../login/FindUs";
import SocialLogin from "../login/SocialLogin";

const RightNavbar = () => {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div>
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightNavbar;
