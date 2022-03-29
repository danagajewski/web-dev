import NavigateList from "./NavigateList.js"

const NavigationSidebar = () => {
  return (`
            ${NavigateList()}
            <div class="d-grid mt-2">
              <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
            
    `);
}
export default NavigationSidebar;
