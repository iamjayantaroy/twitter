import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";

const Post = ({ displayName, username, verified, image, avatar, text }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" className="link" />
          <Repeat fontSize="small" className="link" />
          <FavoriteBorder fontSize="small" className="link" />
          <Publish fontSize="small" className="link" />
        </div>
      </div>
    </div>
  );
};

export default Post;
