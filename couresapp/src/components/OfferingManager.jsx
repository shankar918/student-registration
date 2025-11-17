

import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function OfferingManager() {
  const { courseTypes, courses, offerings, setOfferings } = useContext(AppContext);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const addOffering = () => {
    if (selectedType && selectedCourse) {
      const newOffering = `${selectedType} - ${selectedCourse}`;
      if (!offerings.includes(newOffering)) {
        setOfferings([...offerings, newOffering]);
      } else {
        alert("Offering already exists!");
      }
    } else {
      alert("Please select both course type and course!");
    }
  };

  const deleteOffering = (index) => {
    setOfferings(offerings.filter((_, i) => i !== index));
  };

  return (
    <div className="card shadow p-4">
      <h3>Course Offerings</h3>

      <div className="mb-3">
        <label>Course Type</label>
        <select className="form-select" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Choose Type</option>
          {courseTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Course</label>
        <select className="form-select" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Choose Course</option>
          {courses.map((course, i) => (
            <option key={i} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <button className="btn btn-success w-100 mb-3" onClick={addOffering}>Add Offering</button>

      <h5>Available Offerings</h5>

      <ul className="list-group">
        {offerings.map((o, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            {o}
            <button className="btn btn-sm btn-danger" onClick={() => deleteOffering(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
