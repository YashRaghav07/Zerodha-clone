import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center mx-auto p-5">
        <img
          src="media/images/homeHero.png"
          alt="Some random  related to trading"
          className="mb-5 mx-auto"
          style={{ width: "75%" }}
        />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          className="btn btn-primary mt-4 mx-auto"
          style={{
            height: "10%",
            width: "16%",
            fontWeight: "600",
            fontSize: "100%",
          }}
          to="/Signup"
        >
          Sign up for free
        </Link>
    </div>
  );
}

export default Hero;
