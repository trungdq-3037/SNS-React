
import * as actionTypes from '../actionTypes';
import * as authService from '../../api/auth';

export const login = (username, password) => {
  return (dispatch) => {
    authService.login(username, password)
      .then((response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        dispatch({ type: actionTypes.LOGIN_SUCCESS, token });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.LOGIN_FAILURE, error: error.message });
      });
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: actionTypes.LOGOUT };
};