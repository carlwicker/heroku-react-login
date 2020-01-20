const validateFormReducer = (state = false, action) => {
  switch (action.type) {
    case "VALID":
      return action.payload;
    default:
      return state;
  }
};

export default validateFormReducer;
