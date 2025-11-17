// src/Components/CourseManager.jsx

import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function CourseManager() {
  const { courses, setCourses } = useContext(AppContext);
  const [newCourse, setNewCourse] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addCourse = () => {
    if (newCourse.trim() === "") return alert("Enter course name");

    if (editIndex !== null) {
      const updated = [...courses];
      updated[editIndex] = newCourse;
      setCourses(updated);
      setEditIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }

    setNewCourse("");
  };

  const deleteCourse = (i) => {
    setCourses(courses.filter((_, index) => index !== i));
  };

  const startEdit = (i) => {
    setNewCourse(courses[i]);
    setEditIndex(i);
  };

  return (
    <div className="card shadow p-4">
      <h3>Courses</h3>

      <div className="d-flex gap-2 mb-3">
        <input className="form-control" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} />
        <button className="btn btn-success" onClick={addCourse}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="list-group">
        {courses.map((course, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {course}
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => startEdit(index)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteCourse(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
