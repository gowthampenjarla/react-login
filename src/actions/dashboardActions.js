import { GET_USERS_DETAILS, USERS_ERROR, SET_LOADING } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./assets/data/usersDetails.json");
    const data = await res.json();
    dispatch({
      type: GET_USERS_DETAILS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
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
