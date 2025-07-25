import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container text-center py-5 my-5">
      <h1 className="mt-5 mb-3">The Zerodha Universe</h1>
      <p className="mb-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row m-5">
        <div className="col-1"></div>
        <div className="col">
          <Link to="/ab">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration:"none", fontSize: "0.8rem" }}
            >
              Our asset management venture
              <br /> that is creating simple and transparent index
              <br /> funds to help you save for your goals.
            </p>
          </Link>
        </div>
        <div className="col">
          <Link to="/ab" style={{ textDecoration: "none"}}>
            <img
              src="media/images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}
            >
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </Link>
        </div>
        <div className="col">
          <Link to="/ab" style={{ textDecoration: "none"}}>
            <img
              src="media/images/tijori.svg"
              alt="tijori"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}
            >
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </Link>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row m-5">
        <div className="col-1"></div>
        <div className="col">
          <Link to="/ab" style={{ textDecoration: "none"}}>
            <img
              src="media/images/streakLogo.png"
              alt="streakLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}
            >
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </Link>
        </div>
        <div className="col">
          <Link to="/ab" style={{ textDecoration: "none"}}>
            <img
              src="media/images/smallcaseLogo.png"
              alt="smallcaseLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}
            >
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </Link>
        </div>
        <div className="col">
          <Link to="/ab" style={{ textDecoration: "none"}}>
            <img
              src="media/images/dittoLogo.png"
              alt="dittoLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ textDecoration: "none", fontSize: "0.8rem" }}
            >
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </Link>
        </div>
        <div className="col-1"></div>
      </div>
      <Link
      to="/Signup"
        className="btn btn-primary mt-4 mx-auto"
        style={{
          height: "10%",
          width: "16%",
          fontWeight: "600",
          fontSize: "100%",
        }}
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Universe;
