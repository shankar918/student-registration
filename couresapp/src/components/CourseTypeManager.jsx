// src/Components/CourseTypeManager.jsx

import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function CourseTypeManager() {
  const { courseTypes, setCourseTypes } = useContext(AppContext);
  const [newType, setNewType] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addType = () => {
    if (newType.trim() === "") return alert("Enter a course type");

    if (editIndex !== null) {
      const updated = [...courseTypes];
      updated[editIndex] = newType;
      setCourseTypes(updated);
      setEditIndex(null);
    } else {
      setCourseTypes([...courseTypes, newType]);
    }

    setNewType("");
  };

  const deleteType = (i) => {
    setCourseTypes(courseTypes.filter((_, index) => index !== i));
  };

  const startEdit = (i) => {
    setNewType(courseTypes[i]);
    setEditIndex(i);
  };

  return (
    <div className="card shadow p-4">
      <h3>Course Types</h3>

      <div className="d-flex gap-2 mb-3">
        <input className="form-control" value={newType} onChange={(e) => setNewType(e.target.value)} />
        <button className="btn btn-success" onClick={addType}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="list-group">
        {courseTypes.map((type, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {type}
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => startEdit(index)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteType(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
