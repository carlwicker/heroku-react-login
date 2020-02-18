const isUserSelectedReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_USER_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default isUserSelectedReducer;
