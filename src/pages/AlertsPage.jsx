import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/AlertsPage.css";

function AlertsPage() {
  const { theme } = useContext(ThemeContext);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("alerts")) || [];

  // Mark all as read
  const updated = stored.map(alert => ({ ...alert, read: true }));
  localStorage.setItem("alerts", JSON.stringify(updated));

  setAlerts(updated);
}, []);


  return (
    <div className={`alerts-page ${theme}`}>
      <h2>Alerts & Notifications</h2>

      {alerts.length === 0 ? (
        <p className="empty">No notifications yet.</p>
      ) : (
        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <div key={index} className="alert-card">
              <h3>{alert.fullName}</h3>
              <p><strong>Email:</strong> {alert.email}</p>
              <p><strong>Message:</strong> {alert.message}</p>
              <p className="time">{alert.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AlertsPage;
