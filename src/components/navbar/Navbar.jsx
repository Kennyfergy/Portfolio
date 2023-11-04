import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Kenny Ferguson</span>
        <div className="social">
          <a href="#">
            <img src="./githubpngicon.png" alt="github logo" />
          </a>
          <a href="#">
            <img src="./linkedin.png" alt="linkedin logo" />
          </a>
          <a href="#">
            <img src="./gmail.png" alt="gmail logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
