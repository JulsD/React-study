import React from 'react';

import Wrapper from './../Wrapper';
import styles from './header-footer.css';

class HeaderFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.root}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }

}

export default HeaderFooter;
