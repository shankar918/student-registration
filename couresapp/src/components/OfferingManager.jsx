import React, { useState, useEffect } from "react";

export default function OfferingManager() {
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
  const [courses, setCourses] = useState(["English", "Hindi", "Urdu"]);
  const [offerings, setOfferings] = useState(() => {
    const saved = localStorage.getItem("offerings");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    localStorage.setItem("offerings", JSON.stringify(offerings));
  }, [offerings]);

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
    <div className="container mt-4">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="text-center text-primary mb-4">Course Offerings</h3>

        <div className="mb-3">
          <label className="form-label fw-bold">Select Course Type</label>
          <select
            className="form-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Choose Type</option>
            {courseTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Select Course</label>
          <select
            className="form-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">-- Choose Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-success w-100 mb-3" onClick={addOffering}>
          Add Offering
        </button>

        <h5 className="mt-4 text-secondary">Available Offerings</h5>
        {offerings.length === 0 ? (
          <p className="text-muted"></p>
        ) : (
          <ul className="list-group">
            {offerings.map((o, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {o}
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteOffering(index)}
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
