import React from 'react';

import common from './../../../styles/common.css';

class SearchResult extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className = {common.wrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default SearchResult;
