const validateFormReducer = (state = false, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT_VALIDATION":
      return action.payload;
    default:
      return state;
  }
};

export default validateFormReducer;
