import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo:", email);
    console.log("Contraseña:", password);
    alert("Formulario enviado");
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google credential:", credentialResponse.credential);
    alert("Google login successful!");
  };

  const handleGoogleError = () => {
    alert("Google login failed. Please try again.");
  };

  return (
    <div className="login-container">
      {/* Left Column (60%) */}
      <div className="left-column">
        <img src="/logo.png" alt="Logo" className="logo" />

        <h1 className="responsive-heading">Login to your account</h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
              }}
            >
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                style={{
                  width: "80%",
                  margin: "3% auto",
                }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>

        <div
          style={{
            width: "60%",
            margin: "1% auto",
            display: "flex",
            alignItems: "center",
            minWidth: "400px",
            marginBottom: "3%",
          }}
        >
          <hr style={{ flex: 1, borderColor: "#ddd" }} />
          <span style={{ margin: "0 1rem", color: "#888" }}>or</span>
          <hr style={{ flex: 1, borderColor: "#ddd" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "10%", display: "flex", justifyContent: "center" }}>
            <img
              src="/glogin.jpg"
              alt="Google Login"
              style={{
                cursor: "pointer",
                width: "50%",
                minWidth: "50px",
                maxWidth: "200px",
                borderRadius: "5px",
              }}
              onClick={() => alert("Google login clicked!")}
            />
          </div>
        </div>
        <p style={{ fontSize: "", color: "#888", textAlign: "center" }}>
          Sign in with your Google account
        </p>
      </div>

      {/* Right Column (40%) */}
      <div
        className="right-column"
        style={{
          display: "flex", // Flexbox for alignment
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100%", // Full height of the container
          textAlign: "center", // Ensures text or inline elements are centered
        }}
      >
        <img
          src="/4575-removebg.png" // Replace with your image path in the public folder
          alt="Right Column Illustration"
          style={{
            display: "block", // Ensures the image behaves as a block element
            width: "80%", // Adjust the width of the image
            maxWidth: "600px", // Optional: Limit the maximum width
            margin: "10%", // Centers the image horizontally
          }}
        />
      </div>



    </div>

  );
};

export default Login;
