import React from "react";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "0.5rem",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default InputField;
