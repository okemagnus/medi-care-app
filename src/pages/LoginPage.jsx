// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Auth.css";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

// function LoginPage() {
//   const { theme } = useContext(ThemeContext);
//   const navigate = useNavigate();

//   const [email, setEmail]       = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);

//       alert("Login successful!");

//       navigate("/dashboard"); // redirect after login
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className={`auth-container ${theme}`}>
//       <div className="auth-card">
//         <h2>Welcome Back</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit">Login</button>
//         </form>

//         <p className="auth-switch">
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage(""); // Clear previous error

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      // Clean Firebase errors for user readability
      if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email format.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please try again.");
      } else {
        setErrorMessage("Login failed. Please check your details.");
      }
    }
  };

  return (
    <div className={`auth-container ${theme}`}>
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>
          {errorMessage && (
            <p className="auth-error">{errorMessage}</p>
          )}

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

