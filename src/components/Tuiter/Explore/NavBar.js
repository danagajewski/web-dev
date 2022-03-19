import tabs from "./tab.json";
import NavBarTab from "./NavBarTab.js";
import React from 'react';

const NavBar = () => {
  return(
        <ul className="nav nav-tabs">
          {tabs.map(tab => {return(<NavBarTab tab={tab}/>);})}
        </ul>
    );
}
export default NavBar;