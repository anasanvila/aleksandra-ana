import React from 'react';
import MenuItem from './menuItem';
import home from '../images/home.png';
import edu from '../images/education.png';
import projects from '../images/projects.png';
import arch from '../images/arch.png';
import design from '../images/design.png'
import {Link} from 'react-router-dom'
import {MenuWrapper} from '../style/menuStyle.js';

function Menu () {
    return (
     <MenuWrapper>        
          <Link to="/">
               <MenuItem name="info" >
                    <img src={home} height="60px" alt="info"/>
               </MenuItem>
          </Link>
          <Link to="/education">
               <MenuItem name="education">
                     <img src={edu} height="60px" alt="edu"/>
                </MenuItem>
          </Link>
          <Link to="/projects">
               <MenuItem name="it-projects">
                    <img src={projects} height="60px" alt="it-projects"/>
               </MenuItem>      
          </Link>
          <Link to="/design"> 
               <MenuItem name="design">
                    <img src={design} height="60px" alt="design"/>
               </MenuItem></Link>
          <Link to="/architecture"> 
               <MenuItem name="architecture">
                    <img src={arch} height="60px" alt="architecture"/>
               </MenuItem>
          </Link>
    </MenuWrapper>
    );
}

export default Menu;
