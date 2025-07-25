import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container p-5">
      <div className="row px-5">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Eductaion random"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="my-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <b>
            <Link to="/" style={{ textDecoration: "none" }}>
              Varsity 🡢
            </Link>
          </b>
          <p className="my-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <b>
            <Link to="/" style={{ textDecoration: "none" }}>
              TrandingQ&A 🡢
            </Link>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Education;
