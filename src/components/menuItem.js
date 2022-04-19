import React from 'react';
import {MenuItemWrapper, MenuIcon,H4} from  '../style/menuItemStyle.js';

function MenuItem(props) {
    return (
      <MenuItemWrapper>
        <MenuIcon>{props.children}</MenuIcon>
        <H4>{props.name}</H4>
      </MenuItemWrapper>
    );
  }
  
  export default MenuItem;
  