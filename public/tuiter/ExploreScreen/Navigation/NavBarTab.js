const NavBarTab = (tab) => {
  let active = tab.active ? "nav-link active" : "nav-link";
  return(`
  <li class="nav-item">
    <a class= "${active}" href="#"> ${tab.content} </a>
  </li>
  
  `)
}

export default NavBarTab;