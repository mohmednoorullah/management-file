
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Users,
  UserCheck,
  UserX,
  BookOpen,
  Search,
  SlidersHorizontal,
  Eye,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const studentsData = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@gmail.com",
    phone: "+91 9876543210",
    roll: "STU001",
    course: "Computer Science",
    department: "Computer Science",
    year: "Third Year",
    status: "Active",
    admissionDate: "20 Nov 2026",
  },
  {
    id: 2,
    name: "Rahul Das",
    email: "rahul@gmail.com",
    phone: "+91 9876543211",
    roll: "STU002",
    course: "Information Technology",
    department: "IT",
    year: "Second Year",
    status: "Active",
    admissionDate: "19 Nov 2026",
  },
  {
    id: 3,
    name: "Akhil Raj",
    email: "akhil@gmail.com",
    phone: "+91 9876543212",
    roll: "STU003",
    course: "Data Science",
    department: "Computer Science",
    year: "First Year",
    status: "Inactive",
    admissionDate: "18 Nov 2026",
  },
  {
    id: 4,
    name: "Fathima N",
    email: "fathima@gmail.com",
    phone: "+91 9876543213",
    roll: "STU004",
    course: "Computer Science",
    department: "Computer Science",
    year: "Third Year",
    status: "Active",
    admissionDate: "17 Nov 2026",
  },
  {
    id: 5,
    name: "Adil Mohammed",
    email: "adil@gmail.com",
    phone: "+91 9876543214",
    roll: "STU005",
    course: "Artificial Intelligence",
    department: "Computer Science",
    year: "Second Year",
    status: "Active",
    admissionDate: "16 Nov 2026",
  },
];

function Students() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const [statusFilter, setStatusFilter] = useState("All");

  // Sync search with Navbar search
  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  // Search and filter students
  const filteredStudents = useMemo(() => {
    return studentsData.filter((student) => {
      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        student.name.toLowerCase().includes(search) ||
        student.email.toLowerCase().includes(search) ||
        student.roll.toLowerCase().includes(search) ||
        student.course.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const handleSearch = (value) => {
    setSearchTerm(value);

    const updatedParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      updatedParams.set("search", value);
    } else {
      updatedParams.delete("search");
    }

    setSearchParams(updatedParams, { replace: true });
  };

  const totalStudents = studentsData.length;
  const activeStudents = studentsData.filter(
    (student) => student.status === "Active"
  ).length;
  const inactiveStudents = studentsData.filter(
    (student) => student.status === "Inactive"
  ).length;
  const totalCourses = new Set(
    studentsData.map((student) => student.course)
  ).size;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="students-page">
      {/* Page Header */}
      <div className="students-page-header">
        <div>
          <span className="students-breadcrumb">
            Dashboard / Students
          </span>
          <h1>Students</h1>
          <p>Manage and monitor all registered students.</p>
        </div>

        <div className="students-header-icon">
          <Users size={25} />
        </div>
      </div>

      {/* Statistics */}
      <div className="students-summary-grid">
        <div className="students-summary-card">
          <div className="students-summary-icon blue">
            <Users size={22} />
          </div>
          <div>
            <p>Total Students</p>
            <h2>{totalStudents}</h2>
            <span>Registered students</span>
          </div>
        </div>

        <div className="students-summary-card">
          <div className="students-summary-icon green">
            <UserCheck size={22} />
          </div>
          <div>
            <p>Active Students</p>
            <h2>{activeStudents}</h2>
            <span>Currently active</span>
          </div>
        </div>

        <div className="students-summary-card">
          <div className="students-summary-icon orange">
            <UserX size={22} />
          </div>
          <div>
            <p>Inactive Students</p>
            <h2>{inactiveStudents}</h2>
            <span>Currently inactive</span>
          </div>
        </div>

        <div className="students-summary-card">
          <div className="students-summary-icon purple">
            <BookOpen size={22} />
          </div>
          <div>
            <p>Total Courses</p>
            <h2>{totalCourses}</h2>
            <span>Available courses</span>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="students-table-card">
        <div className="students-table-heading">
          <div>
            <h2>All Students</h2>
            <p>View and manage your student records.</p>
          </div>

          <span className="students-count">
            {filteredStudents.length} Students
          </span>
        </div>

        {/* Search and Filter */}
        <div className="students-toolbar">
          <div className="students-search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search name, email, roll number or course..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="students-filter-box">
            <SlidersHorizontal size={18} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Students</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="students-table-wrapper">
          <table className="students-list-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll Number</th>
                <th>Course</th>
                <th>Year</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="students-person">
                        <div className="students-avatar">
                          {getInitials(student.name)}
                        </div>

                        <div className="students-person-info">
                          <strong>{student.name}</strong>
                          <span>
                            <Mail size={13} />
                            {student.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="students-roll">
                        {student.roll}
                      </span>
                    </td>

                    <td>
                      <span className="students-course">
                        {student.course}
                      </span>
                    </td>

                    <td>{student.year}</td>

                    <td>
                      <span
                        className={`students-status ${
                          student.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        <span className="students-status-dot"></span>
                        {student.status}
                      </span>
                    </td>

                    <td>
                      <Link
                        to={`/students/${student.id}`}
                        className="students-view-button"
                      >
                        View Details
                        <ArrowUpRight size={15} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="students-empty-state">
                      <Search size={35} />
                      <h3>No students found</h3>
                      <p>
                        Try changing your search or status filter.
                      </p>
                      <button
                        onClick={() => {
                          handleSearch("");
                          setStatusFilter("All");
                        }}
                      >
                        Clear Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="students-table-footer">
          <span>
            Showing {filteredStudents.length} of {totalStudents} students
          </span>
          <span>EduManage Student Management System</span>
        </div>
      </div>
    </div>
  );
}

export default Students;
