import React, { useEffect, useState, useContext } from "react";
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from "recharts";
import { useNavigate } from "react-router-dom";
import "../styles/DashboardPage.css";
import { ThemeContext } from "../contexts/ThemeContext";

const DashboardPage = () => {
  const { theme } = useContext(ThemeContext)
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("inventory")) || [];
    setItems(storedItems);
  }, []);

  // Summary data
  const totalItems = items.length;
  const totalStock = items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const totalValue = items.reduce(
    (sum, item) => sum + Number(item.quantity || 0) * Number(item.price || 0),
    0
  );
  //const lowStock = items.filter((item) => Number(item.quantity) <= 5);

  const lowStock = items.filter(
    (item) => Number(item.quantity) <= Number(item.reorderLevel)
  );

  const outOfStock = items.filter((item) => Number(item.quantity) === 0);

  const handleNavigate = (filterType) => {
    navigate("/inventory", { state: { filter: filterType } });
  };

  // Group by category (optional: fallback to "Uncategorized")
  const categoryData = Object.values(
    items.reduce((acc, item) => {
      const cat = item.category || "Uncategorized";
      if (!acc[cat]) acc[cat] = { name: cat, total: 0, value: 0 };
      acc[cat].total += Number(item.quantity || 0);
      acc[cat].value += Number(item.quantity || 0) * Number(item.price || 0);
      return acc;
    }, {})
  );

  // Top 5 valuable items
  const topValuable = [...items]
    .sort((a, b) => b.price * b.quantity - a.price * a.quantity)
    .slice(0, 5);

  // Chart colors
  const COLORS = ["#007bff", "#28a745", "#ffc107", "#17a2b8", "#dc3545"];

    // Simulated monthly sales data (to be replaced with real data later)
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const storedSales = JSON.parse(localStorage.getItem("salesData"));
    if (storedSales) {
      setSalesData(storedSales);
    } else {
      // Generate random monthly sales for demo
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const newSalesData = months.map((m) => ({
        month: m,
        sales: Math.floor(Math.random() * 50000 + 10000), // ₦10k–₦60k
      }));
      localStorage.setItem("salesData", JSON.stringify(newSalesData));
      setSalesData(newSalesData);
    }
  }, []);


  return (
    <div className={`dashboard-page ${theme}`}>
      <h2>📊 Dashboard Analytics</h2>

      <div className="stock-alerts">
      <h3>⚠️ Stock Alerts</h3>
      {lowStock.length > 0 || outOfStock.length > 0 ? (
        <div className="stock-alerts-grid">
          {/* Low Stock Summary */}
          <div
            className="alert-card low-stock clickable"
            onClick={() => handleNavigate("low")}
          >
            <h4>Low Stock Items</h4>
            <ul>
              {lowStock.slice(0, 5).map((item, i) => (
                <li key={i}>
                  {item.name} — {item.quantity} left
                  <span className="reorder-text">
                    (Reorder ≤ {item.reorderLevel})
                  </span>
                </li>
              ))}
            </ul>
            {lowStock.length > 5 && <p>+{lowStock.length - 5} more...</p>}
          </div>

          {/* Out-of-Stock Summary */}
          <div
            className="alert-card out-of-stock clickable"
            onClick={() => handleNavigate("out")}
          >
            <h4>Out of Stock</h4>
            {outOfStock.length > 0 ? (
              <ul>
                {outOfStock.slice(0, 5).map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            ) : (
              <p>✅ All items in stock</p>
            )}
          </div>

          {/* Next to Reorder */}
          <div
            className="alert-card reorder-priority clickable"
            onClick={() => handleNavigate("reorder")}
          >
            <h4>Next to Reorder</h4>
            <ul>
              {[...items]
                .sort((a, b) => a.quantity - b.quantity)
                .slice(0, 5)
                .map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity} units left
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="no-alerts">🎉 All stock levels are healthy!</p>
      )}
    </div>

      {/* --- Summary Cards --- */}
      <div className="summary-grid">
        <div className="summary-card"><h3>Total Items</h3><p>{totalItems}</p></div>
        <div className="summary-card"><h3>Total Stock</h3><p>{totalStock}</p></div>
        <div className="summary-card"><h3>Low-Stock Items</h3><p>{lowStock.length}</p></div>
        <div className="summary-card"><h3>Total Value</h3><p>₦{totalValue.toLocaleString()}</p></div>
      </div>

      {/* --- Charts Section --- */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>Stock Distribution by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Inventory Value by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

                {/* --- Sales Analytics Section --- */}
      <div className="sales-analytics">
        <h3>Monthly Sales Overview</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#28a745" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>

        <div className="sales-summary">
          <h4>Total Annual Sales:</h4>
          <p>
            ₦
            {salesData
              .reduce((sum, entry) => sum + entry.sales, 0)
              .toLocaleString()}
          </p>
        </div>

        {/* --- Add Sale Form --- */}
        <div className="add-sale-form">
          <h4>Add New Sale</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const month = e.target.month.value;
              const amount = Number(e.target.amount.value);

              if (!month || !amount) return alert("Please enter both month and amount.");

              // Create a deep copy so React detects the change
              const updatedData = JSON.parse(JSON.stringify(salesData));
              const existingIndex = updatedData.findIndex((item) => item.month === month);

              if (existingIndex !== -1) {
                // Update existing month sales
                updatedData[existingIndex].sales += amount;
              } else {
                // Add new month entry
                updatedData.push({ month, sales: amount });
              }

              // Sort months in order (optional for chart readability)
              const monthOrder = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ];
              updatedData.sort(
                (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
              );

              // Update state and persist to localStorage
              setSalesData([...updatedData]); // ensure React re-renders
              localStorage.setItem("salesData", JSON.stringify(updatedData));

              e.target.reset();
            }}
          >
            <label>
              Month:
              <select name="month" required>
                {[
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </label>

            <label>
              Amount (₦):
              <input type="number" name="amount" placeholder="e.g. 15000" required />
            </label>

            <button type="submit">Add Sale</button>
          </form>
        </div>
      </div>


      {/* --- Insights Section --- */}
      <div className="insights-section">
        <h3>Top 5 Most Valuable Items</h3>
        <table className="insights-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price (₦)</th>
              <th>Total Value (₦)</th>
            </tr>
          </thead>
          <tbody>
            {topValuable.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{(item.quantity * item.price).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
