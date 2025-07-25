import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-4 ms-3">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border p-2">
              <img
                src="media/images/pricingMf.svg"
                style={{ height: "45%", width: "60%" }}
                alt="pricing random"
              />
                <p>Free account opening</p>
            </div>
            <div className="col border p-2">
              <img
                src="media/images/pricingEquity.svg"
                style={{ height: "45%", width: "60%" }}
                alt="pricing random"
              />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-2">
              <img
                src="media/images/intradayTrades.svg"
                style={{ height: "45%", width: "60%" }}
                alt="pricing random"
              />
              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
      <b>
        <Link to="/pricing" style={{ textDecoration: "none" }} className="ms-3 ps-5">
          See Pricing 🡢
        </Link>
      </b>
    </div>
  );
}

export default Pricing;
