import * as api from '../resource/api';
import { setSearch } from '../action/search';

export function searchByTitle(title){
  return (dispatch) => {
    api.findMoviesByTitle(title)
    .then(function(data) {  
      dispatch(setSearch(data.results));
    })
    .catch(function(error) {
      console.log('Request failed', error);  
    });
  }
}