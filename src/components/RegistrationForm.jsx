import React from "react";
import Stepper from "./Stepper";
import FormStep from "./FormStep";
import { useParams, useHistory } from "react-router-dom";

export default function RegistrationForm() {
  const { stepNum } = useParams();
  const history = useHistory();
  return (
    <div className="registration-form">
      <h1 className="registration-form__header text-center mt-5 mb-3">
        Registration Form
      </h1>
      <p className="registration-form__description text-center">
        This is some registration form
      </p>
      <Stepper step={Number(stepNum)} />
      <FormStep />
      <div
        className={`controls d-flex ${
          Number(stepNum) === 1
            ? "justify-content-end"
            : "justify-content-between"
        }`}
      >
        {Number(stepNum) !== 1 && (
          <button
            className="controls__btn controls__btn--previous"
            onClick={() => history.push(`/step/${+stepNum - 1}`)}
          >
            Previous
          </button>
        )}
        <button
          className="controls__btn controls__btn--next"
          onClick={() => history.push(`/step/${+stepNum + 1}`)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
