import * as api from '../resource/api';
import { setMovieList } from '../action';

export function searchByTitle(title){
  return (dispatch) => {
    api.findMoviesByTitle(title)
    .then(function(data) {  
      dispatch(setMovieList(data.results));
    })
    .catch(function(error) {
      console.log('Request failed', error);  
    });
  }
}