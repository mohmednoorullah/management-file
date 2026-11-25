
import React from "react";
import {
  GraduationCap,
  Target,
  Eye,
  Users,
  BookOpen,
  Award,
  ShieldCheck,
  Heart,
  CheckCircle,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: <Users size={25} />,
      title: "Student Management",
      description:
        "Manage student profiles, personal details, academic records, and enrollment information in one place.",
    },
    {
      icon: <BookOpen size={25} />,
      title: "Academic Tracking",
      description:
        "Organize courses, monitor student progress, and keep academic information easily accessible.",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Secure Records",
      description:
        "Keep student information organized and protected through a structured management system.",
    },
    {
      icon: <Award size={25} />,
      title: "Better Performance",
      description:
        "Use clear dashboards and statistics to understand student performance and overall progress.",
    },
  ];

  const benefits = [
    "Easy student registration and management",
    "Quick access to student information",
    "Organized academic records",
    "Simple and user-friendly dashboard",
    "Responsive design for different devices",
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="about-header">
        <div className="about-header-icon">
          <GraduationCap size={38} />
        </div>

        <div>
          <p className="about-subtitle">LEARN MORE ABOUT US</p>
          <h1>About EduManage</h1>
          <p>
            Making student management smarter, simpler, and more efficient.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="about-intro">
        <div className="about-intro-content">
          <span className="about-tag">WHO WE ARE</span>
          <h2>Welcome to EduManage</h2>

          <p>
            EduManage is a modern Student Management System designed to
            simplify educational administration. It provides a centralized
            platform to manage student information, academic records, and
            other important details.
          </p>

          <p>
            Our goal is to make student data management easier, faster, and
            more organized through a clean and user-friendly interface.
          </p>
        </div>

        <div className="about-intro-card">
          <div className="about-large-icon">
            <GraduationCap size={65} />
          </div>
          <h3>EduManage</h3>
          <p>Smart Student Management System</p>
          <span>Learn • Manage • Grow</span>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission-grid">
        <div className="about-info-card">
          <div className="about-card-icon mission-icon">
            <Target size={28} />
          </div>

          <h3>Our Mission</h3>
          <p>
            To provide a simple and efficient platform that helps educational
            institutions manage student information and academic activities
            effectively.
          </p>
        </div>

        <div className="about-info-card">
          <div className="about-card-icon vision-icon">
            <Eye size={28} />
          </div>

          <h3>Our Vision</h3>
          <p>
            To create a smarter educational environment where technology
            makes student administration more accessible, organized, and
            efficient.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features-section">
        <div className="about-section-heading">
          <span className="about-tag">WHAT WE OFFER</span>
          <h2>Our Key Features</h2>
          <p>Everything you need for organized student management.</p>
        </div>

        <div className="about-features-grid">
          {features.map((feature, index) => (
            <div className="about-feature-card" key={index}>
              <div className="about-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="about-benefits">
        <div className="about-benefits-content">
          <span className="about-tag">WHY CHOOSE US</span>
          <h2>Designed for Better Management</h2>
          <p>
            EduManage brings important student information together in one
            organized platform, helping users save time and manage records
            efficiently.
          </p>

          <div className="about-benefits-list">
            {benefits.map((benefit, index) => (
              <div className="about-benefit-item" key={index}>
                <CheckCircle size={19} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-benefits-visual">
          <div className="benefits-circle">
            <Heart size={55} />
            <h3>Education</h3>
            <p>Our Priority</p>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="about-footer-card">
        <GraduationCap size={35} />
        <h2>Building a Better Educational Experience</h2>
        <p>
          EduManage — Simplifying student management with technology.
        </p>
      </section>
    </div>
  );
}

export default About;
