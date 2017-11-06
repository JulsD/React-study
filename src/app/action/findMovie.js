import * as api from '../resource/api';
import { setMovie } from '../action/movie';
import filter from 'lodash/filter';

export function findMovie(movieId){
  return (dispatch) => {
    let movie;
    api.getMovieById(movieId)
     .then(function(result) {
       movie = result;
       return api.findMovieDirectorAndActors(movieId)
     })
     .then(function(result) {
         movie.actors = result.cast;
         movie.director = filter(result.crew, { 'job': 'Director' });
         return api.findMoviesByDirectorName(movie.director[0].name);
       })
       .then(function(data) {
         dispatch(setMovie({
           movie,
           moviesByDir: filter(data.crew, { 'job': 'Director' })
         }));
       })         
     .catch(function(error) {
       console.log('Request failed', error);  
     });
  }
}