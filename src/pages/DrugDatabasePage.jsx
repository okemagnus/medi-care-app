import React, { useState, useEffect, useContext } from "react";
import "../styles/DrugDatabase.css";
import { ThemeContext } from "../contexts/ThemeContext";

const DrugDatabasePage = () => {
  const { theme } = useContext(ThemeContext)
  const [drugs, setDrugs] = useState([]);
  const [form, setForm] = useState({
    drugId: "",
    name: "",
    batch: "",
    expiry: "",
    manufacturer: "",
    nafdac: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  // Load drugs from localStorage ONCE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("drugDatabase")) || [];
    if (Array.isArray(saved)) {
      setDrugs(saved);
    }
  }, []);

  // Auto-save to localStorage whenever drugs change
  useEffect(() => {
    if (Array.isArray(drugs)) {
      localStorage.setItem("drugDatabase", JSON.stringify(drugs));
    }
  }, [drugs]);

  // Handle form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update Drug
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDrug = { ...form };

    // Validation: avoid saving blank objects
    if (!newDrug.drugId || !newDrug.name || !newDrug.batch || !newDrug.expiry || !newDrug.nafdac) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingIndex !== null) {
      // Update
      const updated = [...drugs];
      updated[editingIndex] = newDrug;
      setDrugs(updated);
      setEditingIndex(null);
    } else {
      // Add
      setDrugs([...drugs, newDrug]);
    }

    // Reset form
    setForm({
      drugId: "",
      name: "",
      batch: "",
      expiry: "",
      manufacturer: "",
      nafdac: "",
    });
  };

  // Edit drug
  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(drugs[index]);
  };

  // Delete drug
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this drug?")) {
      const updated = drugs.filter((_, i) => i !== index);
      setDrugs(updated);
    }
  };

  return (
    <div className={`drug-database container ${theme}`}>
      <h2>Drug Database Manager</h2>

      {/* FORM */}
      <form className="drug-form" onSubmit={handleSubmit}>
        <input
          name="drugId"
          placeholder="Drug ID"
          value={form.drugId}
          onChange={handleChange}
          required
        />

        <input
          name="name"
          placeholder="Drug Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="batch"
          placeholder="Batch Number"
          value={form.batch}
          onChange={handleChange}
          required
        />

        <input
          name="expiry"
          type="date"
          value={form.expiry}
          onChange={handleChange}
          required
        />

        <input
          name="manufacturer"
          placeholder="Manufacturer"
          value={form.manufacturer}
          onChange={handleChange}
          required
        />

        <input
          name="nafdac"
          placeholder="NAFDAC Number"
          value={form.nafdac}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingIndex !== null ? "Update Drug" : "Add Drug"}
        </button>
      </form>

      {/* TABLE */}
      <table className="drug-table">
        <thead>
          <tr>
            <th>Drug ID</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Manufacturer</th>
            <th>NAFDAC</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index}>
              <td>{drug.drugId}</td>
              <td>{drug.name}</td>
              <td>{drug.batch}</td>
              <td>{drug.expiry}</td>
              <td>{drug.manufacturer}</td>
              <td>{drug.nafdac}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button className="danger" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrugDatabasePage;
