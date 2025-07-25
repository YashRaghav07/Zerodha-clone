import React from "react";
import { Link } from "react-router-dom";

function LeftSection({imgSrc,header,paragraph,link1,link2,link3,link4,link1Text,link2Text}) {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <Link to="/dhfig">
          <img
            src={imgSrc}
            alt={imgSrc}
            style={{ height: "90%", width: "90%" }}
          />
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h1 className="mb-4 mt-5 fs-2">{header}</h1>
          <p className="mb-3 text-muted">
            {paragraph}
          </p>
            <Link to={link1} className="me-5" style={{textDecoration:"none"}}>{link1Text}</Link>
            <Link to={link2} className="me-5" style={{textDecoration:"none"}}>{link2Text}</Link><br/><br/>
            <Link to={link3} className="me-5 mt-5" style={{textDecoration:"none"}}>
            <img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge"/>
            </Link>
            <Link to={link4} className="me-5 mt-5" style={{textDecoration:"none"}}>
            <img src="media/images/appstoreBadge.svg" alt="appstoreBadge"/>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
