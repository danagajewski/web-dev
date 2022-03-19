import React from 'react'
import FollowList from "./FollowList.js"

const WhoToFollowList = () => {
  return (
      <div className="container m-0 p-0">
        <ul className="list-group">
          <li className="list-group-item"><p className="wd-content">Who to Follow</p></li>
          { FollowList() }
        </ul>
      </div>
    );
}
export default WhoToFollowList;