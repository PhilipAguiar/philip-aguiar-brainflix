import React from "react";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./HeroPlayer.scss";

function HeroPlayer(props) {
  console.log(props.video);
  return (
    <>
      <video className="hero__player" poster={props.video.image} controls></video>
      <VideoDescription video = {props.video}/>
    </>
  );
}

export default HeroPlayer;
