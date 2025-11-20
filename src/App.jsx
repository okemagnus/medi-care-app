import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import DrugCheckPage from './pages/DrugAuthenticationPage'
import InventoryPage from './pages/InventoryPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import './styles/App.css'
import SignUpPage from './pages/SignUpPage';
import "./utilities/drugDatabase";
import DrugDatabasePage from './pages/DrugDatabasePage'

function App() {

  useEffect(() => {
  const sampleDrugs = [
    {
      id: 1,
      name: "Paracetamol",
      batchNumber: "BATCH-123",
      nafdacNumber: "04-1234",
      expiryDate: "2026-09-10"
    },
    {
      id: 2,
      name: "Amoxicillin",
      batchNumber: "AMX-789",
      nafdacNumber: "04-5678",
      expiryDate: "2025-03-15"
    }
  ];

  if (!localStorage.getItem("drugDatabase")) {
    localStorage.setItem("drugDatabase", JSON.stringify(sampleDrugs));
  }
}, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/drug-check" element={<DrugCheckPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/database" element={<DrugDatabasePage />}/>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { ThemeProvider } from "./contexts/ThemeContext";

// import HomePage from "./pages/HomePage";
// // import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";
// import AuthPage from "./pages/AuthPage";

// import "./styles/App.css";

// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/about" element={<AboutPage />} /> */}
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/auth" element={<AuthPage />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

