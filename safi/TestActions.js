import { ADD_TEST } from './types';

export const addTest = testIndex => (
  {
    type: ADD_FRIEND,
    payload: testIndex,
  }
);