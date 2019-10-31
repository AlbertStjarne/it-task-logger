import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  // what we'll call our state
  log: logReducer,
  tech: techReducer,
});
