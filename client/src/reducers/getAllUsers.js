const getAllUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_USER_ACCOUNTS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default getAllUsersReducer;
