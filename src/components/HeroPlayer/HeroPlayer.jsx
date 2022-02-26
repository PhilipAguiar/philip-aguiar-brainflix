import React from "react";
import "./HeroPlayer.scss";

function HeroPlayer({ image }) {
  return <video className="hero__player" poster={image} controls></video>;
}

export default HeroPlayer;
