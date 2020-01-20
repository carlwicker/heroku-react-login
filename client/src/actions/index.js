import Axios from "axios";

// Login
export const login = data => {
  return {
    type: "LOGIN",
    payload: data
  };
};

// Create Account
export const createAccount = data => {
  return dispatch => {
    // Axios PUT here
    Axios.post("https://react-login-js.herokuapp.com/api/users", data)
      .then(() => {
        dispatch({
          type: "CREATE_ACCOUNT",
          payload: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  };
};

// Validate Create Account Form
export const validateCreateAccountForm = data => {
  return {
    type: "CREATE_ACCOUNT_VALIDATION",
    payload: data
  };
};
