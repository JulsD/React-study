import React from 'react';

import styles from './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button type={this.props.type} className={styles.root}>
          {this.props.children}
        </button>
    );
  }

}

export default Button;
