import React from 'react';
import MovieItem from './MovieItem';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movies = this.props.movies;
    const listMovies = movies.map((movie) =>
      <MovieItem key={movie.toString()} title={movie} />
    );
    return (
      <div className="movies-wrapper">
        {listMovies}
      </div>
    );
  }

}

export default MoviesList;
