import React from "react";
import InputMask from "react-input-mask";

export default function FormStep() {
  return (
    <div className="form-step">
      <div className="form-step__header mb-3">
        <h2 className="w-50 d-inline-block">Title</h2>
        <div className="line w-50 d-inline-block mb-2"></div>
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select className="form-control" id="country">
          <option>Albania</option>
          <option>Bahrain</option>
          <option>Cambodia</option>
          <option>Denmark</option>
          <option>Estwatini</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="number">Number</label>
        <InputMask
          mask="9-9999-9999"
          maskChar="0"
          className="form-control is-invalid"
          id="number"
          alwaysShowMask
        />
        <div className="invalid-feedback">
          Please input a correct phone number.
        </div>
      </div>
    </div>
  );
}
