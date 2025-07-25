import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container text-center p-5">
      <h1 className="m-5" style={{ color: "red" }}>
        404 : Page Not Found
      </h1>
      <img src="/media/images/notfoundpage.png" style={{width:"55%",height:"25%"}} alt="Not found" />
      <br/>
      <Link
        to="/"
        className="btn btn-primary mt-4 mx-auto"
        style={{
          height: "10%",
          width: "16%",
          fontWeight: "600",
          fontSize: "100%",
        }}
      >
        Go to home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
