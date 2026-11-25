
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Info,
  GraduationCap,
  X,
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";

function Sidebar({ isOpen, closeSidebar }) {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      name: "Students",
      path: "/students",
      icon: Users
    },
    {
      name: "About",
      path: "/about",
      icon: Info
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        {/* Brand Section */}
        <div className="sidebar-brand">

          <div className="brand-icon">
            <GraduationCap size={27} />
          </div>

          <div className="brand-text">
            <h2>EduManage</h2>
            <span>Student Portal</span>
          </div>

          <button
            className="close-sidebar"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <X size={21} />
          </button>

        </div>

        {/* Main Navigation */}
        <div className="sidebar-section">

          <p className="sidebar-heading">
            MAIN MENU
          </p>

          <nav className="sidebar-nav">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >

                  <Icon size={20} />

                  <span>{item.name}</span>

                  <ChevronRight
                    className="nav-arrow"
                    size={15}
                  />

                </NavLink>

              );

            })}

          </nav>

        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">

          <div className="sidebar-card">

            <GraduationCap size={27} />

            <h3>Manage Education</h3>

            <p>
              Keep your student records organized
              and manage your institution easily.
            </p>

          </div>

          {/* Footer */}
          <div className="sidebar-footer">

            <div className="sidebar-footer-item">
              <Settings size={18} />
              <span>Student Management</span>
            </div>

            <div className="sidebar-version">
              Version 1.0.0
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;
