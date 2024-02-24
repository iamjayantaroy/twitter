import React from "react";
import "./Widgets.css";
import { Search } from "@mui/icons-material";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets_serachIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__container">
        <h2>Whats happening</h2>

        <TwitterTweetEmbed tweetId={"1761405632094048474"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
