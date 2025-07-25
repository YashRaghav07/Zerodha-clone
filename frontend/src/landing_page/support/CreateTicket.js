import React from "react";
import './CreateTicket.css';
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container my-5">
      <div className="m-5">
        <h1 className="fs-5 opacity-75 m-5">
        To create a ticket, select a relevant topic
      </h1>
      </div>
      <div className="row my-5">
        <div className="col-1"></div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h2></Link>
          <p>
            <Link to="/dcf">
              Resident individual
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Minor
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Non Resident Indian (NRI)
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Company, Partnership, HUF and LLP
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Glossary
            </Link>
          </p>
        </div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h2></Link>
          <p>
            <Link to="/dcf">
              Your Profile
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Account modification
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Client Master Report (CMR) and Depository Participant (DP)
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Nomination
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Transfer and conversion of securities
            </Link>
          </p>
        </div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</h2></Link>
          <p>
            <Link to="/dcf">
              IPO
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Trading FAQs
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Margin Trading Facility (MTF) and Margins
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Charts and orders
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Alerts and Nudges
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              General
            </Link>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row my-5">
        <div className="col-1"></div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</h2></Link>
          <p>
            <Link to="/dcf">
              Add money
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Withdraw money
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Add bank accounts
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              eMandates
            </Link>
          </p>
        </div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console</h2></Link>
          <p>
            <Link to="/">
              Portfolio
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Corporate actions
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Funds statement
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Reports
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Profile
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Segments
            </Link>
          </p>
        </div>
        <div className="col">
          <Link to="/fnn"><h2 className="fs-5 mb-4"><i class="fa fa-circle" aria-hidden="true"></i> Coin</h2></Link>
          <p>
            <Link to="/dcf">
              Mutual funds
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              National Pension Scheme (NPS)
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Fixed Deposit (FD)
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Features on Coin
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              Payments and Orders
            </Link>
          </p>
          <p>
            <Link to="/dcf">
              General
            </Link>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default CreateTicket;
