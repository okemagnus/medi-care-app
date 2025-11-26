import { useContext } from "react";
import { 
  Package, 
  Truck, 
  ShoppingCart, 
  BarChart, 
  ShieldCheck, 
  Bell, 
  Link2, 
  Shield 
} from "lucide-react";
import "../styles/Services.css";
import { ThemeContext } from "../contexts/ThemeContext";

const services = [
  {
    icon: <Package size={40} />,
    title: "Inventory Control",
    description: "Track and manage all your stock in real-time. Add, edit, or remove items with ease.",
  },
  {
    icon: <Truck size={40} />,
    title: "Procurement & Supply",
    description: "Automate purchase orders, manage supplier data, and track incoming deliveries efficiently.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "Sales & Order Tracking",
    description: "Record sales, manage customers, and automatically update stock after every transaction.",
  },
  {
    icon: <BarChart size={40} />,
    title: "Analytics Dashboard",
    description: "Visualize inventory performance with live reports and charts for data-driven decisions.",
  },

  // 🔄 REPLACED WAREHOUSE MANAGEMENT CARD WITH THIS ONE:
  {
    icon: <ShieldCheck size={40} />,
    title: "Drug Authentication",
    description: "Verify product authenticity using QR/Batch numbers to prevent counterfeit drugs.",
  },

  {
    icon: <Bell size={40} />,
    title: "Alerts & Notifications",
    description: "Get instant low-stock or expiry alerts via email or in-app notifications.",
  },
  {
    icon: <Link2 size={40} />,
    title: "Integrations",
    description: "Connect seamlessly with POS, accounting, and e-commerce platforms.",
  },
  {
    icon: <Shield size={40} />,
    title: "User Roles & Permissions",
    description: "Assign roles and restrict access to keep your system secure and organized.",
  },
];


const Services = () => {
  const { theme } = useContext(ThemeContext);
  return (
  <section id="services" className={`services-section ${theme}`}>
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Services;
