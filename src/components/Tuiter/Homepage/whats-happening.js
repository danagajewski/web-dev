import React, {useState} from "react";
import {useDispatch}
  from "react-redux";

import {createTuit} from "../actions/tuit-actions";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});


  return (
      <>
      <div className="row">
        <div className="col-2">
          <img className="wd-round-image mt-2 mx-3" src="https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118" alt={""}/>
        </div>
        <div className="col-10">
            <textarea className="form-control wd-whats-happening"
    onChange={(e) =>
        setNewTuit({
          ...newTuit,
          tuit: e.target.value
        })}/>

          <div className="row">
            <div className="col-8">
              <span className="wd-explore-profile"><i className="fa-solid fa-image"/></span>
              <span className="wd-explore-profile"><i className="fa-solid fa-chart-line"/></span>
              <span className="wd-explore-profile"><i className="fa-solid fa-face-smile"/></span>
              <span className="wd-explore-profile"><i className="fa-solid fa-calendar"/></span>

            </div>
            <div className="col-4">
              <button onClick={() =>
                  createTuit(dispatch, newTuit)}
                      className="btn btn-primary btn-block rounded-pill my-2 wd-tuit-button">
                Tuit
              </button>

            </div>
        </div>

      </div>
      </div>

</>
)
  ;
}

export default WhatsHappening;