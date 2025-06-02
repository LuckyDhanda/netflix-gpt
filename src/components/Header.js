import React from "react";
import logo from "../utils/images/netflix-logo.png";

const Header = () => {
  return (
    <div className="p-8">
      <img src={logo} alt="Logo" className="w-32 h-auto " />
    </div>
  );
};

export default Header;
