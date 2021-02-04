import { GET_USER, SET_LOADING, LOGIN_ERROR } from "./types";

export const getLogin = (user) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("./assets/data/loginDetails.json");
    const data = await res.json();
    if (user === JSON.stringify(data)) {
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload:
          "You've entered an incorrect username or password, please check and try again.",
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
