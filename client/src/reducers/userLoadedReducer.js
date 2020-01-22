const userLoadedReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_LIST_LOADED":
      return (state = true);
    default:
      return state;
  }
};

export default userLoadedReducer;
