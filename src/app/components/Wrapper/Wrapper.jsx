import React from 'react';

import styles from './wrapper.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.root}>
        {this.props.children}
      </div>
    );
  }

}

export default Wrapper;
