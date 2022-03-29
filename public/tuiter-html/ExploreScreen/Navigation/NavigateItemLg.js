const NavigateItemLg = (nav) => {
  return (`
              <button class="${nav.active ? "list-group-item list-group-item-action active" :
                "list-group-item list-group-item-action"}">
                <i class="${nav.icon}"></i> ${nav.content}
              </button>
    `);
}
export default NavigateItemLg;