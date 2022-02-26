import tweets from "./Tweets.js"
import Tweet from "./Tweet.js"

const TweetBlock = () => {
  return (`${tweets.map(tweet => {return(Tweet(tweet));}).join('')}`)
};

export default TweetBlock;