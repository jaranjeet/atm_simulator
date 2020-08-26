import { SET_AUTH_STATUS, SET_CURRENT_USER } from '../constants/signInConstants';

const setAuthStatus = (status) => {
  return { type: SET_AUTH_STATUS, payload: status };
};

const setCurrentUser = (currentUser) => {
  return { type: SET_CURRENT_USER, payload: currentUser };
};

export default {
  setAuthStatus,
  setCurrentUser,
};
