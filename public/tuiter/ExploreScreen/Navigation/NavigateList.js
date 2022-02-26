import NavigateItemLg from "./NavigateItemLg.js"
import NavigateItemSm from "./NavigateItemSm.js"
import navs from "./nav.js"

const NavigateList = () => {
  return(`
        <div class="list-group d-none d-xl-block">
            ${navs.map(nav => {return(NavigateItemLg(nav));}).join('')}
        </div>
        <div class="list-group d-xl-none">
            ${navs.map(nav => {return(NavigateItemSm(nav));}).join('')}
        </div>
    `);
}
export default NavigateList;