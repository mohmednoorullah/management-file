
import React from "react";
import {
  Users,
  UserCheck,
  UserX,
  BookOpen,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  CalendarDays,
  Clock,
  MoreHorizontal,
  Plus,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
      change: "+12.5%",
      icon: <Users size={25} />,
      color: "purple",
      trend: "up",
    },
    {
      title: "Active Students",
      value: "1,080",
      change: "+8.2%",
      icon: <UserCheck size={25} />,
      color: "green",
      trend: "up",
    },
    {
      title: "Inactive Students",
      value: "170",
      change: "-2.4%",
      icon: <UserX size={25} />,
      color: "orange",
      trend: "down",
    },
    {
      title: "Total Courses",
      value: "24",
      change: "+4.6%",
      icon: <BookOpen size={25} />,
      color: "blue",
      trend: "up",
    },
  ];

  const students = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      course: "Computer Science",
      roll: "STU001",
      status: "Active",
      date: "20 Nov 2026",
    },
    {
      id: 2,
      name: "Rahul Das",
      email: "rahul@gmail.com",
      course: "Information Technology",
      roll: "STU002",
      status: "Active",
      date: "19 Nov 2026",
    },
    {
      id: 3,
      name: "Akhil Raj",
      email: "akhil@gmail.com",
      course: "Data Science",
      roll: "STU003",
      status: "Inactive",
      date: "18 Nov 2026",
    },
    {
      id: 4,
      name: "Fathima N",
      email: "fathima@gmail.com",
      course: "Computer Science",
      roll: "STU004",
      status: "Active",
      date: "17 Nov 2026",
    },
    {
      id: 5,
      name: "Adil Mohammed",
      email: "adil@gmail.com",
      course: "Artificial Intelligence",
      roll: "STU005",
      status: "Active",
      date: "16 Nov 2026",
    },
  ];

  const activities = [
    {
      title: "New student registered",
      description: "A new student account was created.",
      time: "10 minutes ago",
      color: "purple",
    },
    {
      title: "Student information updated",
      description: "Student profile information was updated.",
      time: "1 hour ago",
      color: "green",
    },
    {
      title: "New course added",
      description: "A new course was added to the system.",
      time: "3 hours ago",
      color: "blue",
    },
  ];

  return (
    <div className="home-page">

      {/* Welcome Section */}
      <div className="welcome-section">
        <div>
          <p className="welcome-label">DASHBOARD OVERVIEW</p>
          <h1>Welcome back, Admin! 👋</h1>
          <p>
            Here's what's happening with your student management system today.
          </p>
        </div>

        <div className="welcome-date">
          <CalendarDays size={18} />
          <span>November 2026</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-card-top">
              <div className={`stat-icon ${stat.color}`}>
                {stat.icon}
              </div>

              <button className="stat-more" aria-label="More options">
                <MoreHorizontal size={21} />
              </button>
            </div>

            <p className="stat-title">{stat.title}</p>

            <div className="stat-bottom">
              <h2>{stat.value}</h2>

              <span className={`stat-change ${stat.trend}`}>
                {stat.trend === "up" ? (
                  <TrendingUp size={15} />
                ) : (
                  <TrendingDown size={15} />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-main-grid">

        {/* Recent Students */}
        <section className="dashboard-panel recent-students">
          <div className="panel-header">
            <div>
              <h2>Recent Students</h2>
              <p>Recently registered student details</p>
            </div>

            <Link to="/students" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="students-table-wrapper">
            <table className="home-students-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Roll Number</th>
                  <th>Course</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-name-cell">
                        <div className="student-avatar">
                          {student.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{student.name}</strong>
                          <small>{student.email}</small>
                        </div>
                      </div>
                    </td>

                    <td>{student.roll}</td>

                    <td>{student.course}</td>

                    <td>
                      <span
                        className={`status-badge ${
                          student.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>

                    <td>
                      <Link
                        to={`/students/${student.id}`}
                        className="student-view-btn"
                        aria-label={`View ${student.name}`}
                      >
                        <Eye size={17} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Student Overview */}
        <section className="dashboard-panel overview-panel">
          <div className="panel-header">
            <div>
              <h2>Student Overview</h2>
              <p>Student activity summary</p>
            </div>
          </div>

          <div className="overview-chart">
            <div className="donut-chart">
              <div className="donut-inner">
                <h2>1,250</h2>
                <span>Total Students</span>
              </div>
            </div>
          </div>

          <div className="overview-legend">
            <div>
              <span className="legend-dot active-dot"></span>
              <span>Active Students</span>
              <strong>86.4%</strong>
            </div>

            <div>
              <span className="legend-dot inactive-dot"></span>
              <span>Inactive Students</span>
              <strong>13.6%</strong>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom-grid">

        {/* Recent Activities */}
        <section className="dashboard-panel activity-panel">
          <div className="panel-header">
            <div>
              <h2>Recent Activities</h2>
              <p>Latest updates from the system</p>
            </div>

            <Clock size={20} className="panel-heading-icon" />
          </div>

          <div className="activity-list">
            {activities.map((activity, index) => (
              <div className="activity-item" key={index}>
                <div className={`activity-indicator ${activity.color}`}></div>

                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                  <small>{activity.time}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dashboard-panel quick-actions-panel">
          <div className="panel-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Frequently used shortcuts</p>
            </div>
          </div>

          <Link to="/students" className="quick-action-item">
            <div className="quick-action-icon purple">
              <Users size={21} />
            </div>

            <div>
              <h4>Manage Students</h4>
              <p>View and manage student records</p>
            </div>

            <ArrowUpRight size={19} />
          </Link>

          <Link to="/students" className="quick-action-item">
            <div className="quick-action-icon green">
              <Plus size={21} />
            </div>

            <div>
              <h4>Student Records</h4>
              <p>Open the student management page</p>
            </div>

            <ArrowUpRight size={19} />
          </Link>

          <Link to="/about" className="quick-action-item">
            <div className="quick-action-icon blue">
              <GraduationCap size={21} />
            </div>

            <div>
              <h4>About EduManage</h4>
              <p>Learn more about the system</p>
            </div>

            <ArrowUpRight size={19} />
          </Link>
        </section>
      </div>

    </div>
  );
}

export default Home;
