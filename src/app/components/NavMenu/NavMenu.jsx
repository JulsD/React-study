import React from 'react';

import Button from '../Button';
import styles from './nav-menu.css';

class NavMenu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const menu = this.props.menu;
    const menuList = menu.map((menuItem) =>
      <li key={menuItem.toString()}>
        <Button to='/' kind='default' type='link'>{menuItem}</Button>
      </li>
    );
    return (
      <ul className = {styles.root}>
        {menuList}
      </ul>
    );
  }

}

export default NavMenu;
