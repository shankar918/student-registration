import React from "react";

export default function HomePage({ onNavigate }) {
  return (
    <div className="text-center col-50%">
      <h3 className="fw-bold mb-3 text-primary">Welcome to the Student Registration System</h3>
      <p className="text-muted">
        Manage Course Types, Courses, Offerings, and Student Registrations easily.
      </p>

      <div className="mt-4">
        <button
          className="btn btn-success m-2"
          onClick={() => onNavigate("registrations")}
        >
          Register Students
        </button>
        <button
          className="btn btn-outline-primary m-2"
          onClick={() => onNavigate("courses")}
        >
          View Courses
        </button>
      </div>
    </div>
  );
}
