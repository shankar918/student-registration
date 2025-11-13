import React from "react";

export default function HomePage({ onNavigate }) {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <h3 className="fw-bold mb-3 text-primary">
        Welcome to the Student Registration System
      </h3>

      <p className="text-muted mb-4" style={{ maxWidth: "600px" }}>
       
      </p>

      <div>
        <button
          className="btn btn-success m-2 px-4"
          onClick={() => onNavigate("registrations")}
        >
          Register Students
        </button>

        <button
          className="btn btn-outline-primary m-2 px-4"
          onClick={() => onNavigate("courses")}
        >
          View Courses
        </button>
      </div>
    </div>
  );
}
