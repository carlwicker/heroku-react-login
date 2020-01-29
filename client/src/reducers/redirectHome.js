const redirectHomeReducer = (state = false, action) => {
  switch (action.type) {
    case "REDIRECT_HOME":
      return (state = true);
    default:
      return state;
  }
};

export default redirectHomeReducer;
