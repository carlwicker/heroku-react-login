const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return state;
    default:
      return state;
  }
};

export default deleteUserReducer;
