
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Menu,
  GraduationCap,
  ChevronDown,
  X,
  User,
  Settings,
  LogOut
} from "lucide-react";

function Navbar({ onMenuClick }) {
  const [searchValue, setSearchValue] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      searchValue.trim()
        ? `/students?search=${encodeURIComponent(searchValue.trim())}`
        : "/students"
    );
  };

  const getPageTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/students") return "Students";
    if (location.pathname.startsWith("/students/")) return "Student Details";
    if (location.pathname === "/about") return "About Us";
    return "EduManage";
  };

  return (
    <header className="navbar">

      {/* Left Section */}
      <div className="navbar-left">

        <button
          className="navbar-menu-btn"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="navbar-heading">
          <h2>{getPageTitle()}</h2>
          <p>Welcome to EduManage</p>
        </div>

      </div>

      {/* Search Section */}
      <form className="navbar-search" onSubmit={handleSearch}>
        <Search size={19} />

        <input
          type="text"
          placeholder="Search students..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {searchValue && (
          <button
            type="button"
            className="navbar-clear-btn"
            onClick={() => setSearchValue("")}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}

        <button type="submit" className="navbar-search-btn">
          Search
        </button>
      </form>

      {/* Right Section */}
      <div className="navbar-right">

        {/* Notifications */}
        <div className="navbar-dropdown-wrapper">
          <button
            className="navbar-icon-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            aria-label="Notifications"
          >
            <Bell size={21} />
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="navbar-dropdown notification-dropdown">
              <h3>Notifications</h3>

              <div className="notification-item">
                <span className="notification-icon">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <strong>Welcome to EduManage</strong>
                  <p>Your student dashboard is ready.</p>
                  <small>Just now</small>
                </div>
              </div>

              <div className="notification-item">
                <span className="notification-icon">
                  <User size={18} />
                </span>
                <div>
                  <strong>Student Management</strong>
                  <p>Manage your student records here.</p>
                  <small>Today</small>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Admin Profile */}
        <div className="navbar-dropdown-wrapper">
          <button
            className="navbar-profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >
            <div className="navbar-avatar">A</div>

            <div className="navbar-user-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <ChevronDown size={17} />
          </button>

          {showProfile && (
            <div className="navbar-dropdown profile-dropdown">
              <div className="profile-dropdown-header">
                <div className="navbar-avatar">A</div>
                <div>
                  <strong>Admin</strong>
                  <p>admin@edumanage.com</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowProfile(false);
                  navigate("/about");
                }}
              >
                <User size={17} />
                About EduManage
              </button>

              <button
                onClick={() => setShowProfile(false)}
              >
                <Settings size={17} />
                Settings
              </button>

              <button
                onClick={() => setShowProfile(false)}
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
