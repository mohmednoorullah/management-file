
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Hash,
  ShieldCheck,
  Clock,
  Edit,
  Download,
} from "lucide-react";

function StudentDetails() {
  const { id } = useParams();

  // Sample student data
  const students = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      phone: "+91 9876543210",
      roll: "STU001",
      course: "Computer Science",
      department: "Computer Science",
      year: "Third Year",
      gender: "Male",
      dob: "15 March 2005",
      address: "Malappuram, Kerala, India",
      admissionDate: "20 November 2026",
      status: "Active",
      guardian: "Kumar",
      guardianPhone: "+91 9876500000",
      attendance: "92%",
      cgpa: "8.7",
    },
    {
      id: 2,
      name: "Rahul Das",
      email: "rahul@gmail.com",
      phone: "+91 9876543211",
      roll: "STU002",
      course: "Information Technology",
      department: "Information Technology",
      year: "Second Year",
      gender: "Male",
      dob: "10 July 2005",
      address: "Kochi, Kerala, India",
      admissionDate: "19 November 2026",
      status: "Active",
      guardian: "Raj Das",
      guardianPhone: "+91 9876500001",
      attendance: "88%",
      cgpa: "8.2",
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
      gender: "Male",
      dob: "22 January 2006",
      address: "Kozhikode, Kerala, India",
      admissionDate: "18 November 2026",
      status: "Inactive",
      guardian: "Rajesh",
      guardianPhone: "+91 9876500002",
      attendance: "75%",
      cgpa: "7.5",
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
      gender: "Female",
      dob: "12 May 2005",
      address: "Tirur, Kerala, India",
      admissionDate: "17 November 2026",
      status: "Active",
      guardian: "Naseer",
      guardianPhone: "+91 9876500003",
      attendance: "95%",
      cgpa: "9.1",
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
      gender: "Male",
      dob: "5 September 2005",
      address: "Perinthalmanna, Kerala, India",
      admissionDate: "16 November 2026",
      status: "Active",
      guardian: "Mohammed",
      guardianPhone: "+91 9876500004",
      attendance: "90%",
      cgpa: "8.8",
    },
  ];

  // Find student using URL ID
  const student = students.find(
    (item) => String(item.id) === id
  );

  // Student not found
  if (!student) {
    return (
      <div className="student-not-found">
        <User size={50} />
        <h2>Student Not Found</h2>
        <p>The student details you are looking for do not exist.</p>

        <Link to="/students" className="details-back-btn">
          <ArrowLeft size={17} />
          Back to Students
        </Link>
      </div>
    );
  }

  const personalDetails = [
    {
      icon: <Mail />,
      label: "Email Address",
      value: student.email,
    },
    {
      icon: <Phone />,
      label: "Phone Number",
      value: student.phone,
    },
    {
      icon: <User />,
      label: "Gender",
      value: student.gender,
    },
    {
      icon: <CalendarDays />,
      label: "Date of Birth",
      value: student.dob,
    },
    {
      icon: <MapPin />,
      label: "Address",
      value: student.address,
    },
    {
      icon: <Hash />,
      label: "Roll Number",
      value: student.roll,
    },
  ];

  const academicDetails = [
    {
      label: "Course",
      value: student.course,
    },
    {
      label: "Department",
      value: student.department,
    },
    {
      label: "Academic Year",
      value: student.year,
    },
    {
      label: "Admission Date",
      value: student.admissionDate,
    },
    {
      label: "Attendance",
      value: student.attendance,
    },
    {
      label: "CGPA",
      value: student.cgpa,
    },
  ];

  return (
    <div className="student-details-page">

      {/* Header */}
      <div className="details-header">
        <div>
          <Link to="/students" className="details-back-link">
            <ArrowLeft size={17} />
            Back to Students
          </Link>

          <h1>Student Details</h1>
          <p>View complete student profile and academic information.</p>
        </div>

        <div className="details-header-actions">
          <button
            className="details-action-btn"
            onClick={() => window.print()}
          >
            <Download size={17} />
            Print Details
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <section className="student-profile-card">
        <div className="profile-main">
          <div className="profile-avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-information">
            <h2>{student.name}</h2>
            <p>{student.email}</p>

            <div className="profile-tags">
              <span className="profile-roll">{student.roll}</span>

              <span
                className={`details-status ${
                  student.status === "Active" ? "active" : "inactive"
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="profile-course">
          <GraduationCap size={22} />
          <div>
            <span>Enrolled Course</span>
            <strong>{student.course}</strong>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="details-stats-grid">
        <div className="details-stat-card">
          <div className="details-stat-icon purple">
            <BookOpen size={22} />
          </div>
          <div>
            <span>Course</span>
            <h3>{student.course}</h3>
          </div>
        </div>

        <div className="details-stat-card">
          <div className="details-stat-icon green">
            <Clock size={22} />
          </div>
          <div>
            <span>Attendance</span>
            <h3>{student.attendance}</h3>
          </div>
        </div>

        <div className="details-stat-card">
          <div className="details-stat-icon blue">
            <GraduationCap size={22} />
          </div>
          <div>
            <span>CGPA</span>
            <h3>{student.cgpa}</h3>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <section className="details-section">
        <div className="details-section-heading">
          <div className="details-heading-icon">
            <User size={21} />
          </div>
          <div>
            <h2>Personal Information</h2>
            <p>Student's basic personal and contact details</p>
          </div>
        </div>

        <div className="details-information-grid">
          {personalDetails.map((detail, index) => (
            <div className="details-information-item" key={index}>
              <div className="information-icon">
                {detail.icon}
              </div>

              <div>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Information */}
      <section className="details-section">
        <div className="details-section-heading">
          <div className="details-heading-icon academic">
            <GraduationCap size={21} />
          </div>

          <div>
            <h2>Academic Information</h2>
            <p>Course and academic performance details</p>
          </div>
        </div>

        <div className="academic-information-grid">
          {academicDetails.map((detail, index) => (
            <div className="academic-information-item" key={index}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Guardian Information */}
      <section className="details-section">
        <div className="details-section-heading">
          <div className="details-heading-icon guardian">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h2>Guardian Information</h2>
            <p>Emergency and guardian contact information</p>
          </div>
        </div>

        <div className="guardian-information-grid">
          <div className="academic-information-item">
            <span>Guardian Name</span>
            <strong>{student.guardian}</strong>
          </div>

          <div className="academic-information-item">
            <span>Guardian Phone</span>
            <strong>{student.guardianPhone}</strong>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="details-footer">
        <GraduationCap size={20} />
        <span>EduManage Student Management System</span>
      </div>

    </div>
  );
}

export default StudentDetails;
