import React, { createRef } from "react";
import "./HeroPlayer.scss";

function HeroPlayer({ video }) {
  const videoRef = createRef();
  let playStatus = false;

  const videoPlayback = () => {
    if (playStatus === false) {
      videoRef.current.play();
      playStatus = true;
    } else {
      videoRef.current.pause();
      playStatus = false;
    }
  };

  return (
    <video className="hero__player" ref={videoRef} poster={video.image} src={video.video} onClick={videoPlayback} controls />
   
  );
}

export default HeroPlayer;
