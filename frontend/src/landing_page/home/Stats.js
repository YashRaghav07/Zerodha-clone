import React from "react";
import { Link } from "react-router-dom";

function Stars() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="mb-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="mb-5 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money. volumes in India.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt="Stats random"
            style={{height:"90%",width: "100%" }}
          />
          <p className="text-center">
            <Link to="/" className="mx-5" style={{textDecoration:"none"}}>Explore our product 🡢</Link>
            <Link to="/" className="mx-4" style={{textDecoration:"none"}}>Try Kite demo 🡢</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stars;
