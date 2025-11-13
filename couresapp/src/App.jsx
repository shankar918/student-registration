import React, { useState } from "react";
import HomePage from "./components/HomePag";
import CourseTypeManager from "./components/CourseTypeManager";
import CourseManager from "./components/CourseManager";
import OfferingManager from "./components/OfferingManager";
import StudentRegistration from "./components/StudentRegistration";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-bg min-vh-100 d-flex flex-column">
      <header className="bg-primary text-white text-center py-3">
        <h2>Student Registration System</h2>
      </header>

      <nav className="bg-light text-center py-3">
        <div className="btn-group flex-wrap">
          <button
            className={`btn ${page === "home" ? "btn-primary" : "btn-outline-primary"} m-1`}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={`btn ${page === "courseTypes" ? "btn-primary" : "btn-outline-primary"} m-1`}
            onClick={() => setPage("courseTypes")}
          >
            Course Types
          </button>
          <button
            className={`btn ${page === "courses" ? "btn-primary" : "btn-outline-primary"} m-1`}
            onClick={() => setPage("courses")}
          >
            Courses
          </button>
          <button
            className={`btn ${page === "offerings" ? "btn-primary" : "btn-outline-primary"} m-1`}
            onClick={() => setPage("offerings")}
          >
            Course Offerings
          </button>
          <button
            className={`btn ${page === "registrations" ? "btn-primary" : "btn-outline-primary"} m-1`}
            onClick={() => setPage("registrations")}
          >
            Student Registrations
          </button>
        </div>
      </nav>

      <main className="container py-4">
        <div className="card shadow p-4">
          {page === "home" && <HomePage onNavigate={setPage} />}
          {page === "courseTypes" && <CourseTypeManager />}
          {page === "courses" && <CourseManager />}
          {page === "offerings" && <OfferingManager />}
          {page === "registrations" && <StudentRegistration />}
        </div>
      </main>
    </div>
  );
}
