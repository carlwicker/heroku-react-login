const getUserReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    default:
      return state;
  }
};

export default getUserReducer;
