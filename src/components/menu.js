import React, {Component} from 'react';
import MenuItem from './menuItem';
import home from '../images/home.png';
import edu from '../images/education.png';
import projects from '../images/projects.png';
import {MenuWrapper, Home, Edu} from '../style/menuStyle.js';

class Menu extends Component {
    constructor() {
        super();
        this.state = { 
        };
    }

  render(){
    return (
    <MenuWrapper>        
       <MenuItem name="info">
            <Home><img src={home} height="70px" alt="info"/></Home>
       </MenuItem>
       <MenuItem name="education">
            <Edu><img src={edu} height="60px" alt="edu"/></Edu>
       </MenuItem>
       <MenuItem name="projects">
            <img src={projects} height="60px" alt="projects"/>
       </MenuItem>
    </MenuWrapper>
    );
  }
}

export default Menu;
