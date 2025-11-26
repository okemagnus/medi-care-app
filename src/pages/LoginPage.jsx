import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import { ThemeContext } from "../contexts/ThemeContext";

function LoginPage() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`auth-container ${theme}`}>
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
