import { combineReducers } from 'redux';
import publicationsReducer from './publicationsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  publicationsReducer,
  usersReducer,
});