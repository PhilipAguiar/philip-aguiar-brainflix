import React from "react";
import "./ActiveVideo.scss";
import HeroPlayer from "../HeroPlayer/HeroPlayer";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";

function ActiveVideo({title,image,timestamp,channel,views,likes,description,comments }) {
  
  return (
    <section>
      <HeroPlayer image={image}/>
      <VideoDescription 
        title={title} 
        timestamp={timestamp} 
        channel={channel}
        views= {views}
        likes = {likes}
        description = {description} />
      <CommentForm comments={comments} />
      <CommentList comments={comments} />
    </section>
  );
}

export default ActiveVideo;
