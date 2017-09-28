import React from 'react';

import Wrapper from './../Wrapper';

class SearchResult extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }

}

export default SearchResult;
