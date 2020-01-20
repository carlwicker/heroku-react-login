// Login
export const login = data => {
  return {
    type: "LOGIN",
    payload: data
  };
};

// Create Account
export const createAccount = data => {
  return {
    type: "CREATE_ACCOUNT",
    payload: data
  };
};
