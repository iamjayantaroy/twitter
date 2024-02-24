import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName="Jayanta Roy"
        username="@jayanta123"
        verified={true}
        text="i happy with this clone"
        avatar="https://i.pravatar.cc/150?img=2"
        image="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg"
      />

      <Post
        displayName="Elon Musk"
        username="@elonmusk"
        verified={true}
        text="Perhaps it is now clear why 
        @xAI
        ’s Grok is so important. 
        
        It is far from perfect right now, but will improve rapidly. V1.5 releases in 2 weeks.
        
        Rigorous pursuit of the truth, without regard to criticism, has never been more essential."
        avatar="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
        image="https://imgs.search.brave.com/WSgfixNypbojUaSrFtlkOp7HPWqkS5RgBxhPAnb5H8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzIwMDUxMzExNDkx/Ni0wMS1lbG9uLW11/c2stdW5mdXJsZWQt/cmVzdHJpY3RlZC5q/cGc_cT13XzMwMDAs/Y19maWxs"
      />

      <Post
        displayName="NASA"
        username="@NASA"
        verified={true}
        text="For the first time since the Apollo era, new NASA science instruments and tech demonstrations are operating on the Moon after 
        @Int_Machines
        ' Odysseus lander arrived on the lunar surface: https://go.nasa.gov/4bNOUqS"
        avatar="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg"
        image="https://pbs.twimg.com/media/GHD9GipXgAA8dhE?format=jpg&name=small"
      />
      <Post
        displayName="ISRO"
        username="@isro"
        verified={true}
        text="Mission Gaganyaan:
        ISRO's CE20 cryogenic engine is now human-rated for Gaganyaan missions. 
        Rigorous testing demonstrates the engine’s mettle. 
        The CE20 engine identified for the first uncrewed flight LVM3 G1 also went through acceptance tests."
        avatar="https://pbs.twimg.com/profile_images/1600118046743359488/C1_k11I7_400x400.jpg"
        image="https://pbs.twimg.com/media/GG1rcHhaIAA-z0y?format=jpg&name=medium"
      />
      <Post
        displayName="Marvel Entertainment"
        username="@Marvel"
        verified={true}
        text="Mission Gaganyaan:
        ISRO's CE20 cryogenic engine is now human-rated for Gaganyaan missions. 
        Rigorous testing demonstrates the engine’s mettle. 
        The CE20 engine identified for the first uncrewed flight LVM3 G1 also went through acceptance tests."
        avatar="https://pbs.twimg.com/profile_images/1560508217867718657/8ak-Td6l_400x400.jpg"
        image="https://pbs.twimg.com/media/GG-ZTSDXwAAzxzW?format=jpg&name=900x900"
      />
    </div>
  );
};

export default Feed;
