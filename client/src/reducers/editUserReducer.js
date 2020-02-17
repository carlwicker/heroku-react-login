const editUserReducer = (state = false, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default editUserReducer;
