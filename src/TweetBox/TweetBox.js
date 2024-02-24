import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <input type="text" placeholder="Whats hapoening?" />
        </div>
        <button className="tweetbox_tweetBtn">Tweet</button>
      </form>
    </div>
  );
};

export default TweetBox;
