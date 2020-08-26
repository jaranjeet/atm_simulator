import Api from './api.js';

const signIn = (params = {}) => Api.post('/users/sign_in', params);

export default {
  signIn,
};
