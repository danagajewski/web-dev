const NavigateItemLg = ({
  nav = {
    icon : "fa-brands fa-twitter",
    content : "",
    active : true
  }
}) => {
  return (
              <button className={`list-group-item ${nav.active ? ' list-group-item-action active' : ' list-group-item-action'}`}>
                <i className={`${nav.icon}`}/> {nav.content}
              </button>
    );
}
export default NavigateItemLg;