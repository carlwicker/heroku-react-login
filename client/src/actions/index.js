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

// Validate Create Account Form
export const validateCreateAccountForm = data => {
  return {
    type: "VALID",
    payload: data
  };
};
