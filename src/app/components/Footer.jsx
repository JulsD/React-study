import React from 'react';
import Logo from './Logo';

class Footer extends React.Component {

  render() {
    const style = {
      width: '100%',
      backgroundColor: '#474747'
    };
    return (
      <footer style={style}>
        <Logo />
      </footer>
    );
  }

}

export default Footer;
