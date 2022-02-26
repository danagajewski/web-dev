import NavBar from "../Navigation/NavBar.js"
import SearchBar from "./SearchBar.js"
import BigPicture from "./BigPicture.js"
import TweetBlock from "./TweetBlock.js"

const ExploreComponent = () => {
  return (`
      ${ SearchBar() }
      ${ NavBar() }    
      ${ BigPicture("https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg") }
      ${ TweetBlock() }
    `);
}
export default ExploreComponent;