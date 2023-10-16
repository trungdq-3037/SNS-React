
import * as actionTypes from '../actionTypes';

const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { token: action.token, error: null };
    case actionTypes.LOGIN_FAILURE:
      return { token: null, error: action.error };
    case actionTypes.LOGOUT:
      return { token: null, error: null };
    default:
      return state;
  }
};

export default authReducer;