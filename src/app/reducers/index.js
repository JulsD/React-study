import { combineReducers } from 'redux';
import sort from './sort';
import search from './search';

export default combineReducers({
  sort,
  search
})