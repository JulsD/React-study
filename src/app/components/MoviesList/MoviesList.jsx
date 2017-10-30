import React from 'react';
import { connect } from 'react-redux';

import MovieItem from './../MovieItem';
import styles from './movies-list.css';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let movies = this.props.movieList || null;
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

function mapProps(state) {
  return {
    movieList: state.movie.moviesByDir
  }
}

export default connect(mapProps)(MoviesList);
