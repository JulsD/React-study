import React from 'react';

import btn from './../../styles/buttons.css';
import styles from './../../styles/nav-menu.css';

class NavMenu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const menu = this.props.menu;
    const menuList = menu.map((menuItem) =>
      <li key={menuItem.toString()}>
        <a href="#search" className= {`${btn.btn} ${btn.btnGray}`}>{menuItem}</a>
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
