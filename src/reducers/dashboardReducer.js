import { GET_USERS_DETAILS, SET_LOADING, USERS_ERROR } from "../actions/types";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_DETAILS:
      return { ...state, users: payload, loading: false };

    case USERS_ERROR:
      return { ...state, error: payload, loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
