import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  // what we'll call our state
  log: logReducer,
});
