import React from "react";
import Stepper from "./Stepper";
import FormStep from "./FormStep";
import { useParams, useHistory } from "react-router-dom";
import Select from "./form-groups/Select";
import { connect } from "react-redux";
import MaskInput from "./form-groups/MaskInput";
import SimpleInput from "./form-groups/SimpleInput";

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setCountry: (country) => dispatch({ type: "setCountry", value: country }),
  setNumber: (number) => dispatch({ type: "setNumber", value: number }),
  setAge: (age) => dispatch({ type: "setAge", value: age }),
  setEmail: (email) => dispatch({ type: "setEmail", value: email }),
  setPassword: (password) => dispatch({ type: "setPassword", value: password }),
  setName: (name) => dispatch({ type: "setName", value: name }),
  validateStep: (step, history) =>
    dispatch({ type: "validateStep", step, history }),
});

const generateAgeOptions = (min, max) => {
  const options = [];
  for (let i = min; i <= max; i++) {
    options.push(i);
  }
  return options;
};

function RegistrationForm({
  country,
  setCountry,
  number,
  setNumber,
  age,
  setAge,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  stepsValidation,
  validateStep,
}) {
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
      <FormStep>
        {+stepNum === 1 ? (
          <>
            <Select
              id="country"
              label="Country"
              options={[
                "Albania",
                "Bahrain",
                "Cambodia",
                "Denmark",
                "Estwatini",
              ]}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <MaskInput
              id="number"
              label="Number"
              mask="9 9999 9999"
              value={number}
              onChange={(e) => setNumber(e.target.value.replace(/\s/g, ""))}
              showAlert={stepsValidation[0].isValid === false}
              alertMessage="Please enter valid phone number."
            />
          </>
        ) : +stepNum === 2 ? (
          <>
            <Select
              id="age"
              label="Age"
              options={generateAgeOptions(18, 60)}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <SimpleInput
              id="email"
              type="email"
              label="Email"
              value={email}
              placeholder="email@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              showAlert={stepsValidation[1].isValid === false}
              alertMessage="Please enter valid email address."
            />
          </>
        ) : +stepNum === 3 ? (
          <SimpleInput
            id="password"
            type="password"
            label="Password"
            value={password}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            showAlert={stepsValidation[2].isValid === false}
            alertMessage="Password cannot be empty and its length should be more than 3 symbols."
          />
        ) : (
          <SimpleInput
            id="name"
            type="text"
            label="Name"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            showAlert={stepsValidation[3].isValid === false}
            alertMessage="Name cannot be empty"
          />
        )}
      </FormStep>
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
          onClick={() => {
            validateStep(stepNum, history);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
