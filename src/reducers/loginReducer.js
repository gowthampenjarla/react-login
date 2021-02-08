import {
  GET_USER,
  SET_LOADING,
  LOGIN_ERROR,
  LOGOUT_USER,
} from "../actions/types";

const initialState = {
  loginUser: null,
  loading: false,
  isUserLoggedIn: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loginUser: action.payload,
        isUserLoggedIn: true,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loginUser: null,
        isUserLoggedIn: false,
      };

    default:
      return state;
  }
};
