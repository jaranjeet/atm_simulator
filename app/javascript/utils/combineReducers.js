const combineReducer = (reducers) => (state = {}, action) => {
  const nextState = {};
  Object.keys(reducers).forEach(key => (nextState[key] = reducers[key](state[key], action)));
  return nextState;
};
export default combineReducer;
