import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container m-5">
      <h1 className="mx-5 text-center pb-3 mb-5">People</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col ps-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ height: "80%", width: "70%", borderRadius: "100%" }}
            alt="founder"
          />
          <h1 className="fs-5 mt-2">Nithin Kamath</h1>
          <p>Founder, CEO</p>
        </div>
        <div className="col pt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/homepage" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <Link to="/trandingQnA" style={{ textDecoration: "none" }}>
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link to="/twitter" style={{ textDecoration: "none" }}>
              Twitter
            </Link>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Team;
