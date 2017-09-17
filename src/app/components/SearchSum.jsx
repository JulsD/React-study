import React from 'react';

class SearchSum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSum: '7 movies found'
    };
  }

  render() {
    return (
      <p>
        {this.state.searchSum}
      </p>
    );
  }

}

export default SearchSum;
