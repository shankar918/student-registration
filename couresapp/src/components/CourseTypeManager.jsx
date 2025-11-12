import React, { useState } from "react";

export default function CourseTypeManager() {
  const [types, setTypes] = useState(["Individual", "Group", "Special"]);
  const [newType, setNewType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddOrUpdate = () => {
    if (newType.trim() === "") {
      setMessage(" Please enter a course type name!");
      return;
    }

    const exists = types.some(
      (t, i) => t.toLowerCase() === newType.toLowerCase() && i !== editingIndex
    );

    if (exists) {
      setMessage("This course type already exists!");
      return;
    }

    let updated;
    if (editingIndex !== null) {
      updated = [...types];
      updated[editingIndex] = newType;
      setTypes(updated);
      setEditingIndex(null);
      setMessage("Course type updated successfully!");
    } else {
      setTypes([...types, newType]);
      setMessage(" New course type added!");
    }

    setNewType("");
  };

  const handleEdit = (index) => {
    setNewType(types[index]);
    setEditingIndex(index);
    setMessage("");
  };

  const handleDelete = (index) => {
    const updated = types.filter((_, i) => i !== index);
    setTypes(updated);
    setMessage(" Course type deleted.");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-primary mb-4"> Manage Course Types</h3>

        {/* Feedback message */}
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

        {/* Input Section */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter course type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
          />
          <button
            className={`btn ${editingIndex !== null ? "btn-warning" : "btn-success"}`}
            onClick={handleAddOrUpdate}
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Course Type List */}
        {types.length === 0 ? (
          <p className="text-muted text-center">No course types available.</p>
        ) : (
          <ul className="list-group">
            {types.map((type, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{type}</strong>
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
