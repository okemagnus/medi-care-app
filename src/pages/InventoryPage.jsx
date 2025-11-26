import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/InventoryPage.css";
import { ThemeContext } from "../contexts/ThemeContext";

function InventoryPage() {
  const { theme } = useContext(ThemeContext)
  // ✅ Initialize from localStorage with lazy initializer
  const location = useLocation();
  const filterType = location.state?.filter || null;
  const [inventory, setInventory] = useState(() => {
    const stored = localStorage.getItem("inventory");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse inventory from localStorage:", err);
      return [];
    }
  });

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    reorderLevel: ""
  });

  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [lowStockFilter, setLowStockFilter] = useState(false);
  
  // ✅ Persist to localStorage whenever inventory changes
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  // Low-stock count
  const lowStockCount = inventory.filter(
    (item) => Number(item.quantity) <= Number(item.reorderLevel || 0)
  ).length;

  const filteredInventory = inventory.filter((item) => {
  const term = searchTerm.toLowerCase();

  // Apply search filter
  const matchesSearch =
    item.name.toLowerCase().includes(term) ||
    (item.category && item.category.toLowerCase().includes(term));

  // Apply low-stock filter if enabled
  const matchesLowStock = !lowStockFilter || Number(item.quantity) <= Number(item.reorderLevel || 0);

  return matchesSearch && matchesLowStock;
});

  // --- Handlers ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.quantity || !form.price) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedInventory = [...inventory];

    if (editIndex !== null) {
      updatedInventory[editIndex] = form;
      setEditIndex(null);
    } else {
      updatedInventory.push(form);
    }

    setInventory(updatedInventory);
    setForm({ name: "", quantity: "", price: "", category: "", reorderLevel: "" });
  };

  const handleEdit = (index) => {
    setForm(inventory[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete this item?")) {
      const updatedInventory = inventory.filter((_, i) => i !== index);
      setInventory(updatedInventory);
    }
  };

  return (
    <div className={`inventory-page ${theme}`}>
      <h1 className="inventory-title">Inventory Management</h1>
      <h2 className="inventory-title">
        {lowStockCount > 0 && (
          <span
            className="low-stock-badge"
            style={{ cursor: "pointer" }}
            onClick={() => setLowStockFilter(!lowStockFilter)}
            title={lowStockFilter ? "Show all items" : "Show only low-stock items"}
          >
            {lowStockCount} item{lowStockCount > 1 ? "s" : ""} low ⚠️
          </span>
        )}
      </h2>


      <div className="inventory-search">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      {/* --- Form --- */}
      <form onSubmit={handleSubmit} className="inventory-form">
        <input
          type="text"
          placeholder="Item Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price (₦)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Reorder Level"
          value={form.reorderLevel}
          onChange={(e) => setForm({ ...form, reorderLevel: e.target.value })}
          required
        />
        <button type="submit">{editIndex !== null ? "Update Item" : "Add Item"}</button>
      </form>

      {/* --- Inventory Table --- */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price (₦)</th>
            <th>Category</th>
            <th>Reorder Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item, i) => {
          const isLow = Number(item.quantity) <= Number(item.reorderLevel || 0);
          return (
            <tr key={i} className={isLow ? "low-stock" : ""}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category || "-"}</td>
              <td>{item.reorderLevel || "-"}</td>
              <td>
                {isLow ? (
                  <span className="status low">⚠️ Low Stock</span>
                ) : (
                  <span className="status ok">✅ OK</span>
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(i)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(i)} className="delete-btn">Delete</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryPage;
