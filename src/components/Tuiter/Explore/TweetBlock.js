import tweets from "./Tweets.json"
import Tweet from "./Tweet.js"
import React from "react";

const TweetBlock = () => {
  return (
      <>
        { tweets.map(tweet => {return (<Tweet tweet={tweet}/>);}) }
      </>
  );
}

export default TweetBlock;