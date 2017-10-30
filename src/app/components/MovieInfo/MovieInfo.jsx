import React from 'react';

class MovieInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Films by 
        {this.props.movieInfo.map(item => <span key={item.id}>{item.name}<i> </i></span>)}
      </div>
    );
  }

}

export default MovieInfo;
