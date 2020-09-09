export default (state) => {
  const { stepsValidation } = state;
  const index = stepsValidation.findIndex((step) => !step.isValid);
  return index === -1 ? -1 : index + 1;
};
