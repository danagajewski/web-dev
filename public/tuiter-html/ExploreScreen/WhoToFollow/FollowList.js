import follows from "./Follows.js";
import Follow from "./Follow.js";

const FollowList = () => {
  return (`${follows.map(follow => {return(Follow(follow));}).join('')}`)
}

export default FollowList;