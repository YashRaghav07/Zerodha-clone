import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom px-5 sticky-top"
      style={{ backgroundColor: "#fff", height: "4.5rem" }}
    >
      <div className="container px-5">
        <Link className="navbar-brand px-5" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "30%" }}
          />
        </Link>
        <div className="nav-active  text-muted">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link me-3" aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            {/* <li className="nav small mx-3">
              <Link className="nav-link" to="/">
                <i
                  className="fa fa-bars"
                  style={{ fontSize: "1.2rem", color: "black" }}
                  aria-hidden="true"
                ></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
