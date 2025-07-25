import React from "react";
import "./Footer.css"; 
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-muted border-top pt-5 px-5">
    <div className="container px-5">
      <div className="row px-5">
        <div className="col-2 main-footer">
          <img
            src="media/images/logo.svg"
            alt="Logo"
          />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.<br/> All rights reserved.</p>
              <Link href="/" aria-label="LinkedIn">
                <i
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="/" aria-label="Facebook">
                <i
                  className="fa fa-facebook-official"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="/" aria-label="Instagram">
                <i
                  className="fa fa-instagram"
                  aria-hidden="true"
                ></i>
              </Link>
              <br/>
              <Link to="/" aria-label="YouTube">
                <i
                  className="fa fa-youtube-play"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="/" aria-label="Telegram">
                <i
                  className="fa fa-telegram"
                  aria-hidden="true"
                ></i>
              </Link>
        </div>
        <div className="col-2"></div>
        <div className="col-2 account">
          <h1 className="fs-5">Account</h1>
          <Link to="/">Open demat account</Link>
          <br />
          <br />
          <Link to="/">Minor demat account</Link>
          <br />
          <br />
          <Link to="/">NRI demat account</Link>
          <br />
          <br />
          <Link to="/">Commodity</Link>
          <br />
          <br />
          <Link to="/">Dematerialisation</Link>
          <br />
          <br />
          <Link to="/">Fund transfer</Link>
          <br />
          <br />
          <Link to="/">MTF</Link>
          <br />
          <br />
          <Link to="/">Referral program</Link>
          <br />
          <br />
        </div>
        <div className="col-2 support">
          <h1 className="fs-5">Support</h1>
          <Link to="/">Contact us</Link>
          <br />
          <br />
          <Link to="/">Support portal</Link>
          <br />
          <br />
          <Link to="/">How to file a complaint?</Link>
          <br />
          <br />
          <Link to="/">Status of your complaints</Link>
          <br />
          <br />
          <Link to="/">Bulletin</Link>
          <br />
          <br />
          <Link to="/">Circular</Link>
          <br />
          <br />
          <Link to="/">Z-Connect blog</Link>
          <br />
          <br />
          <Link to="/">Downloads</Link>
          <br />
          <br />
        </div>
        <div className="col-2 company">
          <h1 className="fs-5">Company</h1>
          <Link to="/">About</Link>
          <br />
          <br />
          <Link to="/">Philosophy</Link>
          <br />
          <br />
          <Link to="/">Press & media</Link>
          <br />
          <br />
          <Link to="/">Careers</Link>
          <br />
          <br />
          <Link to="/">Zerodha Cares (CSR)</Link>
          <br />
          <br />
          <Link to="/">Zerodha.tech</Link>
          <br />
          <br />
          <Link to="/">Open source</Link>
          <br />
          <br />
        </div>
        <div className="col-2 quick-links">
          <h1 className="fs-5">Quick links</h1>
          <Link to="/">Upcoming IPOs</Link>
          <br />
          <br />
          <Link to="/">Brokerage charges</Link>
          <br />
          <br />
          <Link to="/">Market holidays</Link>
          <br />
          <br />
          <Link to="/">Economic calendar</Link>
          <br />
          <br />
          <Link to="/">Calculators</Link>
          <br />
          <br />
          <Link to="/">Markets</Link>
          <br />
          <br />
          <Link to="/">Sectors</Link>
          <br />
          <br />
        </div>
      </div>
      <div className="text-muted footer-text">
        <p className="mt-5">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>
      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>
      </div>
      <div className="other-links">
        <Link to="/">NSE</Link> <Link to="/">BSE</Link> <Link to="/">MCX</Link> <Link to="/">Terms & conditions</Link> <Link to="/">Policies & procedures</Link> <Link to="/">Privacy policy</Link> <Link to="/">Disclosure</Link> <Link to="/">For investor's attention</Link> <Link to="/">Investor charter</Link>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
