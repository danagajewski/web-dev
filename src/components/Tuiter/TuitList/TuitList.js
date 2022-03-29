import React from "react";
import {useSelector} from "react-redux";
import Tweet
  from "./Tweet";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);

  return (
      <ul className="list-group">
        {
            tuits.map && tuits.map(tuit =>
                <Tweet key={tuit._id}
                       tuit={tuit}/>)
        }
      </ul>
  );
}

export default TuitList;