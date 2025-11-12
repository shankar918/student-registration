import React, { useState } from "react";

export default function CourseManager() {
  const [courses, setCourses] = useState(["English", "Hindi", "Urdu"]);
  const [newCourse, setNewCourse] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");

  const handleAddOrUpdate = () => {
    if (!newCourse.trim()) {
      setError(" Please enter a course name!");
      return;
    }
    setError("");

    if (editingIndex !== null) {
      const updated = [...courses];
      updated[editingIndex] = newCourse;
      setCourses(updated);
      setEditingIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }
    setNewCourse("");
  };

  const handleEdit = (index) => {
    setNewCourse(courses[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <div className="card shadow p-4 mx-auto mt-4" style={{ maxWidth: "600px" }}>
        <h4 className="text-center text-primary mb-3"> Manage Courses</h4>

        {/* Input Section */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter course name"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleAddOrUpdate}>
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {error && <p className="text-danger small mb-3 text-center">{error}</p>}

        {/* Course List */}
        {courses.length === 0 ? (
          <p className="text-muted text-center">No courses available.</p>
        ) : (
          <ul className="list-group">
            {courses.map((course, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{course}</span>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
