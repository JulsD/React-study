import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import sort from './sort';
import search from './search';
import movie from './movie';
import isLoading from './isLoading';

export default combineReducers({
  sort,
  search,
  movie,
  form,
  isLoading
})