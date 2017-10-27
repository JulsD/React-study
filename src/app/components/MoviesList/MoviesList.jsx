import React from 'react';

import MovieItem from './../MovieItem';
import styles from './movies-list.css';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let movies = this.props.movies || null;
    const listMovies = movies.map((movie) =>
      <MovieItem key={movie.id.toString()} movie={movie} />
    );
    return (
      <div className = {styles.root}>
        {listMovies}
      </div>
    );
  }

}

export default MoviesList;
