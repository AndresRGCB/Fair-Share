import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "../styles/login.css";

const Login = () => {
  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Sign-Up Form State
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle between forms
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin((prev) => !prev);

    // Clear Fields on Toggle
    setLoginEmail("");
    setLoginPassword("");
    setName("");
    setSignUpEmail("");
    setSignUpPassword("");
    setConfirmPassword("");
  };

  // Handle Login Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Logging in...");
  };

  // Handle Sign-Up Submit
  const handleSignUpSubmit = (e) => {
      e.preventDefault();

      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signUpEmail)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (signUpPassword.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      if (signUpPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      alert("Account created successfully!");
  };


  return (
    <div className="login-container">
      <div className="left-column">
        <img src="/logo.png" alt="Logo" className="logo" />

        <div className="form-wrapper">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="form-container"
              >
                <LoginForm
                  email={loginEmail} setEmail={setLoginEmail}
                  password={loginPassword} setPassword={setLoginPassword}
                  handleSubmit={handleLoginSubmit}
                  toggleForm={toggleForm}
                />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="form-container"
              >
                <SignUpForm
                  name={name} setName={setName}
                  email={signUpEmail} setEmail={setSignUpEmail}
                  password={signUpPassword} setPassword={setSignUpPassword}
                  confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                  handleSubmit={handleSignUpSubmit}
                  toggleForm={toggleForm}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="right-column">
        <div className="right-column-wrapper">
          <img src="/4575-removebg.png" alt="Illustration" className="right-column-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
