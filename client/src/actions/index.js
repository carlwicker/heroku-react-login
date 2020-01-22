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
        dispatch(getAllUsersJSON());
        dispatch(validateCreateAccountForm(false));
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

export const getAllUsersJSON = () => {
  return dispatch => {
    Axios.get("https://react-login-js.herokuapp.com/api/users")
      .then(res => {
        dispatch({
          type: "GET_ALL_USER_ACCOUNTS",
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};

export const deleteUser = _id => {
  return dispatch => {
    Axios.delete("https://react-login-js.herokuapp.com/api/users/" + _id).then(
      res => {
        dispatch({
          type: "DELETE_USER"
        });
        dispatch(getAllUsersJSON());
      }
    );
  };
};

export const userListLoaded = data => {
  if (data === true) {
    return dispatch =>
      dispatch({
        type: "USER_LIST_LOADED",
        payload: data
      });
  }
};
