export default (state, { step, history }) => {
  if (+step === 1) {
    const { number } = state;
    const stepsValidation = [...state.stepsValidation];
    const isValid = !(number.endsWith("0") || number === "");
    isValid && history.push(`/step/${+step + 1}`);
    stepsValidation[step - 1].isValid = isValid;
    return { ...state, stepsValidation };
  }
  if (+step === 2) {
    const { email } = state;
    const stepsValidation = [...state.stepsValidation];
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());
    isValid && history.push(`/step/${+step + 1}`);
    stepsValidation[step - 1].isValid = isValid;
    return { ...state, stepsValidation };
  }
  if (+step === 3) {
    const { password } = state;
    const isValid = password.trim() !== "" && password.length > 0;
    const stepsValidation = [...state.stepsValidation];
    isValid && history.push(`/step/${+step + 1}`);
    stepsValidation[step - 1].isValid = isValid;
    return { ...state, stepsValidation };
  }
  return state;
};
