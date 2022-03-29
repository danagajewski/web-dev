import tabs from "../Explore/tab.js";
import NavBarTab from "./NavBarTab.js";

const NavBar = () => {
  return(`
        <ul class="nav nav-tabs">
          ${tabs.map(tab => {return(NavBarTab(tab));}).join('')}
        </ul>
    `);
}
export default NavBar;