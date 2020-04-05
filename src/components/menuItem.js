import React
 from 'react';
import {MenuItemWrapper, H4} from  '../style/menuItemStyle.js';

function MenuItem(props) {
    return (
      <MenuItemWrapper>
        {props.children}
        <H4>{props.name}</H4>
      </MenuItemWrapper>
    );
  }
  
  export default MenuItem;
  