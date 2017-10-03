import React from 'react';
import { Link } from 'react-router-dom'

import styles from './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const btnStyleMap = {
      'primary': styles.primary,
      'default': styles.default,
      'informative': styles.informative,
      'not-active': styles['not-active']
    }
    
    if(this.props.type == 'button' || this.props.type == 'submit') {
      return (
          <button type={this.props.type} className={`${btnStyleMap[this.props.kind]} ${styles.root}`}>
            {this.props.children}
          </button>
      );
    } else if (this.props.type == 'link'){
      return (
          <Link to={this.props.to} className={`${btnStyleMap[this.props.kind]} ${styles.root}`}>
            {this.props.children}
          </Link>
      );
    } else if (this.props.type == 'a'){
      return (
          <a to={this.props.href} className={`${btnStyleMap[this.props.kind]} ${styles.root}`}>
            {this.props.children}
          </a>
      );
    } else if (this.props.type == 'label'){
      return (
          <label htmlFor={this.props.for} className={`${btnStyleMap[this.props.kind]} ${styles.root}`}>
            {this.props.children}
          </label>
      );
    } else {
      return (
          <div className={`${btnStyleMap[this.props.kind]} ${styles.root}`}>
            {this.props.children}
          </div>
      );
    }
  }

}

export default Button;
