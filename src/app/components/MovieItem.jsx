import React from 'react';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movieTitle = this.props.title;
    return (
      <div className="movie-item">
        <div className="movie-img"></div>
        <div className="movie-info">
          <div className="movie-title">{this.props.title} Title</div>
          <div className="movie-date">1990</div>
          <div className="movie-genre">genre</div>
        </div>
      </div>
    );
  }

}

export default MovieItem;
