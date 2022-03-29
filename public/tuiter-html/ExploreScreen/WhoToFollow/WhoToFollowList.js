import FollowList from "./FollowList.js"

const WhoToFollowList = () => {
  return (`
      <div class="container m-0 p-0">
        <ul class="list-group">
          <li class="list-group-item"><p class="wd-content">Who to Follow</p></li>
          ${ FollowList() }
        </ul>
      </div>
    `);
}
export default WhoToFollowList;