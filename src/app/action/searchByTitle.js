import * as api from '../resource/api';
import { setMovieList, setLoadingSearch } from '../action';

export function searchByTitle(title){
  return (dispatch) => {
    dispatch(setLoadingSearch(true));
    api.findMoviesByTitle(title)
    .then(function(data) {  
      dispatch(setMovieList(data.results));
      dispatch(setLoadingSearch(false));
    })
    .catch(function(error) {
      console.log('Request failed', error);
      dispatch(setLoadingSearch(false));
    });
  }
}