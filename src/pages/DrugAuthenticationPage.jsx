import React, { useState } from "react";
import "../styles/DrugAuthenticationPage.css";

const DrugAuthenticationPage = () => {
  const [formData, setFormData] = useState({
    drugId: "",
    batch: "",
    nafdac: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const authenticate = (e) => {
    e.preventDefault();

    const storedDB = JSON.parse(localStorage.getItem("drugDatabase")) || [];

    // Find match (case-insensitive)
    const match = storedDB.find(
      (drug) =>
        drug.drugId.toLowerCase() === formData.drugId.toLowerCase() &&
        drug.batch.toLowerCase() === formData.batch.toLowerCase() &&
        drug.nafdac.toLowerCase() === formData.nafdac.toLowerCase()
    );

    if (!match) {
      return setResult({
        status: "danger",
        message: "❌ Drug NOT FOUND in the authentication database.",
      });
    }

    // Expiry checks
    const today = new Date();
    const exp = new Date(match.expiry);
    const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));

    if (today > exp) {
      return setResult({
        status: "danger",
        message: `⚠ This drug exists but is EXPIRED!\nExpired on: ${match.expiry}`,
      });
    }

    if (diffDays <= 30) {
      return setResult({
        status: "warning",
        message: `⚠ Warning: Drug is NEAR EXPIRATION!\nExpires in ${diffDays} days (${match.expiry})`,
      });
    }

    return setResult({
      status: "success",
      message: `✅ Drug is VALID and AUTHENTIC.\nExpiry Date: ${match.expiry}`,
    });
  };

  return (
    <div className="auth-page">
      <h2>🔍 Drug Authentication</h2>

      <form className="auth-form" onSubmit={authenticate}>
        <input
          type="text"
          name="drugId"
          placeholder="Enter Drug ID"
          value={formData.drugId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="batch"
          placeholder="Batch Number"
          value={formData.batch}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nafdac"
          placeholder="NAFDAC Number"
          value={formData.nafdac}
          onChange={handleChange}
          required
        />
        <button type="submit">Verify Drug</button>
      </form>

      {result && (
        <div className={`result-box ${result.status}`}>
          {result.message.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DrugAuthenticationPage;
