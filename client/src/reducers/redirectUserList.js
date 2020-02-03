const redirectUserListReducer = (state = false, action) => {
  switch (action.type) {
    case "REDIRECT_USER_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default redirectUserListReducer;
