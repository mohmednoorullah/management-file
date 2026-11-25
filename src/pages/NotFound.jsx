
import React from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  Home,
  GraduationCap,
  Search,
} from "lucide-react";

function NotFound() {
  return (
    <div className="notfound-page">

      <div className="notfound-card">

        {/* Logo */}
        <div className="notfound-logo">
          <GraduationCap size={28} />
          <span>EduManage</span>
        </div>

        {/* Error Icon */}
        <div className="notfound-icon">
          <Search size={65} />
          <span>?</span>
        </div>

        {/* Error Message */}
        <h1>404</h1>
        <h2>Page Not Found!</h2>

        <p>
          Sorry, the page you are looking for doesn't exist or
          may have been moved. Please check the URL or return
          to your dashboard.
        </p>

        {/* Action Buttons */}
        <div className="notfound-buttons">

          <Link to="/" className="notfound-home-btn">
            <Home size={18} />
            Back to Dashboard
          </Link>

          <button
            className="notfound-back-btn"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <div className="notfound-footer">
          <AlertCircle size={15} />
          <span>Error Code: 404 — Page Not Found</span>
        </div>

      </div>

    </div>
  );
}

export default NotFound;
