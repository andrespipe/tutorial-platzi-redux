import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationsReducer from './publicationsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  publicationsReducer,
  publicationReducer,
  usersReducer,
});