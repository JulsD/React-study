import filter from 'lodash/filter';
import find from 'lodash/find';

import DB from '../../../mock-db/db.json';

export function getMovieByTitle(movieTitle) {
  return new Promise((resolve, reject) => {
    let result = find(DB, {'show_title':movieTitle});
    setTimeout(
      () => {
        if(result) {
          resolve(result);
        } else {
          reject(new Error('Film not found'));
        }
      }
    , 2000);
  })
}

export function findMoviesBy(params) {
  return new Promise((resolve) => {
    let result = filter(DB, params);
    setTimeout(
      () => {  resolve(result); }
    , 2000);
  })
}