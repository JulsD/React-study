import React from 'react';
import { Link } from 'react-router-dom'


import btn from './../../../styles/buttons.css';
import styles from './nav-menu.css';

class NavMenu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const menu = this.props.menu;
    const menuList = menu.map((menuItem) =>
      <li key={menuItem.toString()}>
        <Link to='/' className= {`${btn.btn} ${btn.btnGray}`}>{menuItem}</Link>
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
