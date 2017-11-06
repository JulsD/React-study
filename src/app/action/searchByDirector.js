import * as api from '../resource/api';
import { setSearch } from '../action/search';
import filter from 'lodash/filter';

export function searchByDirector(director){
  return (dispatch) => {
    api.findMoviesByDirectorName(director)
     .then(function(data) {  
       dispatch(setSearch(filter(data.crew, { 'job': 'Director' })));
     })
     .catch(function(error) {
       console.log('Request failed', error);  
     });
  }
}