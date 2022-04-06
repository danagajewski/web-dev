import Tweet
  from "./Tweet";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findAllTuits} from "../actions/tuit-actions";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);
  const dispatch = useDispatch();

  useEffect(() => findAllTuits(dispatch));

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