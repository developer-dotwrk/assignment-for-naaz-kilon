import React from "react";

export default function Select(props) {
  const { id, label, options, value, onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
