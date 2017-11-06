import * as api from '../resource/api';
import { setMovieList, setLoadingSearch } from '../action';
import filter from 'lodash/filter';

export function searchByDirector(director){
  return (dispatch) => {
    dispatch(setLoadingSearch(true));
    api.findMoviesByDirectorName(director)
     .then(function(data) {  
       dispatch(setLoadingSearch(false));
       dispatch(setMovieList(filter(data.crew, { 'job': 'Director' })));
     })
     .catch(function(error) {
       console.log('Request failed', error);
       dispatch(setLoadingSearch(false));
     });
  }
}