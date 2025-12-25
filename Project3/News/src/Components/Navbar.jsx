import React from "react";

const Navbar = ({ setcategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-5xl text-white" href="#">
          NavMag
        </a>

        {/* Always visible nav links */}
        <div className="navbar-nav">
          <a
            className="nav-link text-white"
            onClick={() => setcategory("technology")}
            style={{ cursor: "pointer" }}
          >
            Technology
          </a>
          <a
            className="nav-link text-white"
            onClick={() => setcategory("business")}
            style={{ cursor: "pointer" }}
          >
            Business
          </a>
          <a
            className="nav-link text-white"
            onClick={() => setcategory("health")}
            style={{ cursor: "pointer" }}
          >
            Health
          </a>
          <a
            className="nav-link text-white"
            onClick={() => setcategory("sports")}
            style={{ cursor: "pointer" }}
          >
            Sports
          </a>
          <a
            className="nav-link text-white"
            onClick={() => setcategory("entertainment")}
            style={{ cursor: "pointer" }}
          >
            Entertainment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
