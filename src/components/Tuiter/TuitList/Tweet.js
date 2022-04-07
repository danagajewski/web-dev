import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../actions/tuit-actions";

const Tweet = ({
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
    "logo-image": "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118",
    "avatar_image": "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345
    }
  }
}) => {
  const dispatch = useDispatch();

  return (<div className="card wd-middle">

        <div className="row card-body p-1 m-1 ">
          <div className="row">
            <div className="col-2 my-2">
              <img src={tuit.avatar_image} alt={""} className="wd-round-image"/>
            </div>
            <div className="col-10">
              <p className="wd-content-ends"> {tuit.topic}</p>
              <p className="wd-content-main">{"postedBy" in tuit ? tuit.postedBy.username : "Dana Gajewski"} {tuit.verified
                  ? <i className="fa-solid fa-check-circle"/> : ""} <span className="wd-handle">@{tuit.handle}</span> <span
                  className="wd-handle"> - {tuit.time}
                <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
                </span></p>
              <p className="wd-content">{tuit.tuit}</p>
              {tuit.hasOwnProperty("attachments") && "image"
              in tuit.attachments ?
                  <img
                      src={tuit.attachments.image}
                      className="wd-rounded-edges my-2" alt={""}/> :
                  <></>}
              {tuit.hasOwnProperty("attachments") && "video"
              in tuit.attachments ?
                  <iframe height={250} className="my-2 wd-rounded-edges"
                          src={"https://www.youtube.com/embed/"
                              + tuit.attachments.video}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/> :
                  <></>}
              <TuitStats tuit={tuit}/>

            </div>
          </div>
        </div>
      </div>


  );
}

export default Tweet;