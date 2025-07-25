import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container pt-1 my-5">
      <h1 className="fs-2 opacity-75 my-5 text-center">
        We pioneered the discount broking model in India.
        <br /> Now, we are breaking ground with our technology.
      </h1>
      <div className="row my-5 border-top">
        <div className="col-2"></div>
        <div className="col my-5">
          <div className="mt-5 pt-5">
            <p>
            We kick-started operations on the 15th of August, 2010
            <br /> with the goal of breaking all barriers that traders and
            <br /> investors face in India in terms of cost, support, and
            <br /> technology. We named the company Zerodha, a<br /> combination
            of Zero and "Rodha", the Sanskrit word for
            <br />
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house
            <br /> technology have made us the biggest stock broker in
            <br /> India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year
            <br /> through our powerful ecosystem of investment
            <br /> platforms, contributing over 15% of all Indian retail
            <br /> trading volumes.
          </p>
          </div>
        </div>
        <div className="col my-5">
          <div className="mt-5 pt-5">
            <p>
            In addition, we run a number of popular open online
            <br /> educational and community initiatives to empower retail
            <br /> traders and investors.
          </p>
          <p>
            <Link to="/ranimatter" style={{textDecoration:"none"}}>Rainmatter</Link>, our fintech fund and incubator, has invested
            <br /> in several fintech startups with the goal of growing the
            <br /> Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our blog or see what
            <br /> the media is saying about us or learn more about our
            <br /> business and product philosophies.
          </p>
          </div>
        </div>
        <div className="col-2 my-5"></div>
      </div>
    </div>
  );
}

export default Hero;
