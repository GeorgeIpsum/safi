import { combineReducers } from 'redux';
import { ADD_TEST } from './types';

const INITIAL_STATE = {
  current: [],
  possible: [
    'some',
    'strings',
    'go',
    'here',
  ],
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TEST:
      const {
        current,
        possible,
      } = state;

      const addedTest = possible.splice(action.payload, 1);

      current.push(addedTest);

      const newState = { current, possible };
      return newState;
      
    default:
      return state;
  }
}

export default combineReducers({
  tests: testReducer,
});