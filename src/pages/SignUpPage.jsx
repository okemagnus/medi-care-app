import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import { ThemeContext } from "../contexts/ThemeContext";

function SignUpPage() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`auth-container ${theme}`}>
      <div className="auth-card">
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
