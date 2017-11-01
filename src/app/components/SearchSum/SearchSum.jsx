import React from 'react';
import { connect } from 'react-redux';

class SearchSum extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sumText = this.props.search.movies.length ? this.props.search.movies.length + ' movies found' : null;
    return (
      <p>
        {sumText}
      </p>
    );
  }

}

function mapProps(state) {
  return {
    search: state.search
  }
}

export default connect(mapProps)(SearchSum);
