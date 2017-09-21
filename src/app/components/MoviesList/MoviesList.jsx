import React from 'react';

import { MovieItem } from './../';
import styles from './movies-list.css';

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
      <div className = {styles.root}>
        {listMovies}
      </div>
    );
  }

}

export default MoviesList;
