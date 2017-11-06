import * as api from '../resource/api';
import { setMovieList } from '../action/setMovieList';
import filter from 'lodash/filter';

export function searchByDirector(director){
  return (dispatch) => {
    api.findMoviesByDirectorName(director)
     .then(function(data) {  
       dispatch(setMovieList(filter(data.crew, { 'job': 'Director' })));
     })
     .catch(function(error) {
       console.log('Request failed', error);  
     });
  }
}