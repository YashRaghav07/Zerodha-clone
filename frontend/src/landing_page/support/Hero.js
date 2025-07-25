import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div class="hero">
      <div className="row">
        <div className="col-2 mt-5"></div>
        <div className="col-2 mt-5">
          <h2 className="fs-4">Support Portal</h2>
        </div>
        <div className="col-6 mt-5"></div>
        <div className="col bor mt-5">
          <Link to="/djb">Track tickets</Link>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
      <div className="row pb-5 mb-5">
        <div className="col-2 mb-5"></div>
        <div className="col-5 bor mb-5">
          <h3 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <div className="mt-4 mb-3">
            <div class="input-group">
              <input
              placeholder="Eg: how do i active F&o,why is my order getting rejected ..."
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
              <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
          <Link to="/djb" className="me-4">
            Track account opening
          </Link>
          <Link to="/djb" className="me-4">
            Track segment activation
          </Link>
          <Link to="/djb" className="me-4">
            Intraday margins
          </Link>
          <br />
          <Link to="/djb" className="me-4">
            Kite user manual
          </Link>
        </div>
        <div className="col-3 mb-5">
          <h3 className="fs-4">Featured</h3>
          <ol type="1">
            <li className="mb-3">
              <Link to="/djb">Quarterly Settlement of Funds - July 2025</Link>
            </li>
            <li className="mb-3">
              <Link to="/djb">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </Link>
            </li>
          </ol>
        </div>
        <div className="col-2 mb-5"></div>
      </div>
    </div>
  );
}

export default Hero;
