import React, { useState } from "react";

export default function StudentRegistration() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", course: "" });
  const [message, setMessage] = useState("");

  const register = () => {
    if (!form.name || !form.course) {
      setMessage("Please enter both student name and course!");
      return;
    }

    // Check if student already registered
    const exists = students.some(
      (s) =>
        s.name.toLowerCase() === form.name.toLowerCase() &&
        s.course.toLowerCase() === form.course.toLowerCase()
    );

    if (exists) {
      setMessage("This student is already registered for this course!");
      return;
    }

    setStudents([...students, form]);
    setForm({ name: "", course: "" });
    setMessage(" Student registered successfully!");
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    setMessage("Student registration removed.");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-primary mb-4"> Student Registration</h3>

        
        {message && (
          <div
            className={`alert ${
              message.includes("")
                ? "alert-success"
                : message.includes("")
                ? "alert-warning"
                : "alert-danger"
            } py-2`}
          >
            {message}
          </div>
        )}

   
        <div className="row g-3 mb-3">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Course Name"
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success " onClick={register}>
              Register
            </button>
          </div>
        </div>

        {/* Registered Students List */}
        <h5 className="text-secondary"> Registered Students</h5>
        {students.length === 0 ? (
          <p className="text-muted"></p>
        ) : (
          <ul className="list-group">
            {students.map((s, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{s.name}</strong> — {s.course}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteStudent(i)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
