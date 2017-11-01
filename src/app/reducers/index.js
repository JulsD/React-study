import { combineReducers } from 'redux';
import sort from './sort';
import search from './search';
import movie from './movie';

export default combineReducers({
  sort,
  search,
  movie
})