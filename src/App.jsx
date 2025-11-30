import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import DashboardPage from './pages/DashboardPage';
import DrugCheckPage from './pages/DrugAuthenticationPage';
import InventoryPage from './pages/InventoryPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AlertsPage from './pages/AlertsPage';
import './styles/App.css';
import SignUpPage from './pages/SignUpPage';
import "./utilities/drugDatabase";
import DrugDatabasePage from './pages/DrugDatabasePage';
import "./styles/theme.css";

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
            <AuthProvider>
              <Routes>
                {/* Public pages */}
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />

                {/* Protected pages */}
                <Route  
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                  } 
                /> 

                <Route
                 path="/drug-check"
                 element={
                  <PrivateRoute>
                    <DrugCheckPage />
                  </PrivateRoute>
                 }
               />

                <Route
                 path="/inventory" 
                 element={
                  <PrivateRoute>
                    <InventoryPage />
                  </PrivateRoute>
                 } 
                />

                <Route 
                  path="/database" 
                  element={
                    <PrivateRoute>
                      <DrugDatabasePage />
                    </PrivateRoute>
                  }
                />

                <Route
                 path="/alerts" 
                 element={
                  <PrivateRoute>
                    <AlertsPage />
                  </PrivateRoute>
                 } 
                />
              </Routes>
            </AuthProvider>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App