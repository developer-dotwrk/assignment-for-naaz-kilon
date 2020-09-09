import React from "react";

export default function FormStep(props) {
  return (
    <div className="form-step">
      <div className="form-step__header mb-3">
        <h2 className="w-50 d-inline-block">Title</h2>
        <div className="line w-50 d-inline-block mb-2"></div>
      </div>
      {props.children}
    </div>
  );
}
