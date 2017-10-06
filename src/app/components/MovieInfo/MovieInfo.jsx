import React from 'react';

class MovieInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {`Films by ${this.props.movieInfo}`}
      </div>
    );
  }

}

export default MovieInfo;
