import { combineReducers } from 'redux';
import users from './users';
import paginator from './paginator';

export default combineReducers({
  users,
  paginator,
});