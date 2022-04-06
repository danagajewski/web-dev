import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuit-actions";
const TuitStats = ({
  tuit = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
      "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
      "video": "unKvMC3Y1kI"
    },
    "logo-image": "../../../images/react-blue.png",
    "avatar-image": "../../../images/react-blue.png",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345
    }
  }
}) => {
  const dispatch = useDispatch();

  return (
      <div className="d-flex justify-content-around">
        <span><i className="fa-solid fa-comment"/> {tuit.comments && tuit.comments}</span>
        <span><i className="fa-solid fa-retweet"/> {tuit.retuits && tuit.retuits}</span>
          <span onClick={() => updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1
          })}>
          {tuit.liked &&
              <i className="fas fa-heart me-1"
                 style={{color: 'red'}}/>}
            {!tuit.liked &&
                <i className="far fa-heart me-1"/>}
            {tuit.likes !== 0 && tuit.likes}

          </span>
          <span><i className="fa-solid fa-arrow-up-right-from-square"/></span>
      </div>
  );
}
export default TuitStats;