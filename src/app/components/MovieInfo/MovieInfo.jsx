import React from 'react';
import { connect } from 'react-redux';

class MovieInfo extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        Films by 
        {this.props.directors.map(item => <span key={item.id}><i> </i>{item.name}</span>)}
      </div>
    );
  }

}

function mapProps(state) {
  return {
    directors: state.movie.movie.director
  }
}

export default connect(mapProps)(MovieInfo);
