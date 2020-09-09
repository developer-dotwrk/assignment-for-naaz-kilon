import React from "react";
import InputMask from "react-input-mask";

export default function MaskInput(props) {
  const { id, label, mask, value, onChange, showAlert } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <InputMask
        mask={mask}
        maskChar="0"
        className={showAlert ? "form-control is-invalid" : "form-control"}
        id={id}
        alwaysShowMask
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">
        Please input a correct phone number.
      </div>
    </div>
  );
}
