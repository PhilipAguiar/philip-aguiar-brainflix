import React from "react";
import "./ActiveVideo.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";

function ActiveVideo({title,timestamp,channel,views,likes,description,comments,timestampConverter }) {
  
  return (
    <section className="activeVideo">
      <VideoDescription 
        title={title} 
        timestamp={timestamp} 
        channel={channel}
        views= {views}
        likes = {likes}
        description = {description}
        timestampConverter = {timestampConverter} />
      <CommentForm comments={comments} />
      <CommentList 
      comments={comments}
      timestampConverter = {timestampConverter}  />
    </section>
  );
}

export default ActiveVideo;
