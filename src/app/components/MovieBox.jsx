import React from 'react';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movieTitle = this.props.title;
    return (
      <div className="movie-card">
        <div className="movie-cover"></div>
        <div className="movie-details">
          <div className="movie-title">{this.props.title} Title</div>
          <div className="movie-rate">1990</div>
          <div className="movie-genre">genre</div>
          <div className="movie-date">1990</div>
          <div className="movie-duratiom">{154} min</div>
          <div className="movie-description">description</div>
          <div className="movie-director">director</div>
          <div className="movie-cast-list">cast-list</div>
        </div>
      </div>
    );
  }

}

export default MovieBox;
