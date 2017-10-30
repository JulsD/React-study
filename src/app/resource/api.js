const dbUrl = 'https://api.themoviedb.org/3';
const api_key = '2d0c9f9df6e187ac34ef7a3136100918';

function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}

function json(response) {  
  return response.json()
}

export function getMovieById(movie_id) {
  let url = dbUrl + '/movie/' + movie_id + '?api_key=' + api_key;

  return fetch(url)  
    .then(status)  
    .then(json);
}

export function findMoviesByTitle(searchQuery) {
  let url = dbUrl + '/search/movie?api_key=' + api_key + '&query=' + searchQuery;
  
  return fetch(url)  
    .then(status)  
    .then(json);
}

function findDirectorId(searchQuery) {
  let url = dbUrl + '/search/person?api_key=' + api_key + '&query=' + searchQuery;
  
  return fetch(url)  
    .then(status)  
    .then(json)
    .then(function(data) {  
      return data.results[0].id;
    });
}

export function findMoviesByDirectorName(directorName) {
  let directorId = findDirectorId(directorName);
  
  return directorId.then(
    function(data){
      let url = dbUrl + '/person/' + data + '/movie_credits?api_key=' + api_key;

      return fetch(url)  
      .then(status)  
      .then(json);
  })
}

export function findMovieDirectorAndActors(movieId) {
      let url = dbUrl + '/movie/' + movieId + '/credits?api_key=' + api_key;

      return fetch(url)  
      .then(status)  
      .then(json);
}