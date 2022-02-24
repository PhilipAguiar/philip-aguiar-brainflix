import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./HeroPlayer.scss";

function HeroPlayer({video}) {
  console.log(video);
  return (
    <>
      <video className="hero__player" poster={video.image} controls></video>
      <VideoDescription video = {video}/>
      <CommentForm video = {video}/>
      <CommentList comments = {video.comments}/>
    </>
  );
}

export default HeroPlayer;
