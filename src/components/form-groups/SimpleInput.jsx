import React from "react";

export default function SimpleInput(props) {
  const { id, type, label, value, placeholder, onChange, showAlert } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={showAlert ? "form-control is-invalid" : "form-control"}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="invalid-feedback">
        Please input a correct phone number.
      </div>
    </div>
  );
}
