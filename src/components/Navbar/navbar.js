import React from "react";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#portfolio" data-scroll-to className="navbar__link">
        Portfolio
      </a>
      <a href="#aboutme" data-scroll-to className="navbar__link">
        Aboutme
      </a>
    </div>
  );
}

export default Navbar;
