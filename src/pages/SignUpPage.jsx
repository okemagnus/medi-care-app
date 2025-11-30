import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPage() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully!");

      navigate("/dashboard"); // redirect to protected page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`auth-container ${theme}`}>
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Full Name" 
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="Email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
