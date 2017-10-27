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

export function findMoviesByTitle(searchQuery) {
  let params = '/search/movie?api_key=' + api_key + '&query=' + searchQuery;
  let url = dbUrl + params;
  
  return fetch(url)  
    .then(status)  
    .then(json);
}

function findDirectorId(searchQuery) {
  let params = '/search/person?api_key=' + api_key + '&query=' + searchQuery;
  let url = dbUrl + params;
  
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
      let params = '/person/' + data + '/movie_credits?api_key=' + api_key;
      let url = dbUrl + params;
      return fetch(url)  
      .then(status)  
      .then(json);
  })
}
