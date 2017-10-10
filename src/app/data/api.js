import filter from 'lodash/filter';
import find from 'lodash/find';

import DB from '../../../mock-db/db.json';

export function getMovieByTitle(movieTitle) {
  return find(DB, {'show_title':movieTitle});
}

export function findMoviesBy(params) {
  return filter(DB, params);
}