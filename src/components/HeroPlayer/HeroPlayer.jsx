import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./HeroPlayer.scss";

function HeroPlayer(props) {
  console.log(props.video);
  return (
    <>
      <video className="hero__player" poster={props.video.image} controls></video>
      <VideoDescription video = {props.video}/>
      <CommentForm video = {props.video}/>
      <CommentList comments = {props.video.comments}/>
    </>
  );
}

export default HeroPlayer;
