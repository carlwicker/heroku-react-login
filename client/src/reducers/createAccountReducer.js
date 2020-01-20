const createAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return action.payload;
    default:
      return state;
  }
};

export default createAccountReducer;
