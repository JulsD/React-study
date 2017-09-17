import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movieOpend = this.props.movieOpend;

    let navBody = null;
    if (movieOpend) {
      navBody = <NavMenu menu={['Search']}/>;
    }
    
    return (
      <nav className="header-nav">
        <Logo />
        {navBody}
      </nav>
    );
  }

}

export default Nav;
