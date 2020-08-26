import { SET_AUTH_STATUS, SET_CURRENT_USER } from '../constants/signInConstants';
import {
  SET_AUTHENTICATED,
  RESET_AUTHENTICATED,
  SET_USER,
  SET_ERROR,
} from '../constants/rootConstants';

export const initialState = {
  isAuthenticated: false,
  currentUser: {},
  error: false,
  errorMessage: '',
};

function setAuthenticated(state, payload) {
  return {
    ...state,
    isAuthenticated: true
  };
}

function resetAuthenticated(state, payload) {
  return {
    ...state,
    isAuthenticated: false
  };
}

function setUser(state, payload) {
  return {
    ...state,
    userName: payload
  };
}

function setError(state, payload) {
  return {
    ...state,
    error: true,
    errorMessage: payload
  };
}

export default function reducer(state, action) {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return { ...state, isAuthenticated: action.payload };
    case SET_CURRENT_USER:
      return {...state, currentUser: action.payload};
    case SET_AUTHENTICATED:
      return setAuthenticated(state, action.payload);
    case RESET_AUTHENTICATED:
      return resetAuthenticated(state, action.payload);
    case SET_USER:
      return setUser(state, action.payload);
    case SET_ERROR:
      return setError(state, action.payload);
    default:
      return state;
  }
};
