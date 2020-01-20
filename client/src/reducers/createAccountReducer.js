const createAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return action.payload;

    // Setup ExpressJS Endpoint
    // Axios PUT here

    default:
      return state;
  }
};

export default createAccountReducer;
