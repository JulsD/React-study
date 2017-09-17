import React from 'react';

class NavMenu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const menu = this.props.menu;
    const menuList = menu.map((menuItem) =>
      <li key={menuItem.toString()}>{menuItem}</li>
    );
    return (
      <ul className="nav-menu">
        {menuList}
      </ul>
    );
  }

}

export default NavMenu;
