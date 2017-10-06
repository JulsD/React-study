import React from 'react';

class SearchSum extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sumText = this.props.sum ? this.props.sum + ' movies found' : null;
    return (
      <p>
        {sumText}
      </p>
    );
  }

}

export default SearchSum;
