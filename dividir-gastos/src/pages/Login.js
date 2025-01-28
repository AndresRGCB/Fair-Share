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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "radial-gradient(circle at top right, #dbe3f2, #e9ecef)",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "60%",
            marginBottom: "1rem",
          }}
        />
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Login</Button>
        </form>
        <hr style={{ margin: "1.5rem 0", borderColor: "#e9ecef" }} />
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          useOneTap
        />
      </div>
    </div>
  );
};

export default Login;
