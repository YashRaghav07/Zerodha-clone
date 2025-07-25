import React from 'react'
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className="container text-center p-5">
            <h2>Open a Zerodha account</h2>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
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

export default OpenAccount;