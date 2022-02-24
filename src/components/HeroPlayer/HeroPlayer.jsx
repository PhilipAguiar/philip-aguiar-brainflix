import React from "react";
import "./HeroPlayer.scss";

function HeroPlayer({ video }) {
  console.log(video);
  return <video className="hero__player" poster={video.image} controls></video>;
}

export default HeroPlayer;
