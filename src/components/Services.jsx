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
import { Link } from "react-router-dom";

const services = [
  {
    icon: <BarChart size={40} />,
    title: "Analytics Dashboard",
    description: "Visualize inventory performance with live reports and charts for data-driven decisions.",
    path: "/dashboard"
  },

  {
    icon: <Package size={40} />,
    title: "Inventory Control",
    description: "Track and manage all your stock in real-time. Add, edit, or remove items with ease.",
    path: "/inventory"
  },
  
  // {
  //   icon: <Truck size={40} />,
  //   title: "Procurement & Supply",
  //   description: "Automate purchase orders, manage supplier data, and track incoming deliveries efficiently.",
  //   path: "/procurement"
  // },
  
  // {
  //   icon: <ShoppingCart size={40} />,
  //   title: "Sales & Order Tracking",
  //   description: "Record sales, manage customers, and automatically update stock after every transaction.",
  //   path: "/inventory"
  // },
  
  {
    icon: <ShieldCheck size={40} />,
    title: "Drug Authentication",
    description: "Verify product authenticity using QR/Batch numbers to prevent counterfeit drugs.",
    path: "/drug-check"
  },

  {
  icon: <Link2 size={40} />,
  title: "Drug Database",
  description: "Access a comprehensive drug database with detailed medical and pharmaceutical information.",
  path: "/database"
  },

  {
    icon: <Shield size={40} />,
    title: "User Roles & Permissions",
    description: "Assign roles and restrict access to keep your system secure and organized.",
    path: "/inventory"
  },

  {
    icon: <Bell size={40} />,
    title: "Alerts & Notifications",
    description: "Get instant low-stock or expiry alerts via email or in-app notifications.",
    path: "/alerts"
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
          <Link
            key={index}
            to={service.path}
            className="service-card-link"
          >
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
}

export default Services;
