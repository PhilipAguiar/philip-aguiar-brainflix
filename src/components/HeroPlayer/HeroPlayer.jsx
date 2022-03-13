import React, { createRef } from "react";
import "./HeroPlayer.scss";

function HeroPlayer({ video }) {
  const videoRef = createRef();
  let playStatus =false;
  
  
  const videoPlayback = () =>{
    if(playStatus === false){
      videoRef.current.play()
      playStatus = true;
      console.log(playStatus)
    }else{
      videoRef.current.pause()
      playStatus = false;
      console.log(playStatus)

    }
  }

  return <video className="hero__player" ref={videoRef} poster={video.image} src={video.video} onClick={videoPlayback} controls>
    <img src={video.image} alt="" />
    </video>;
}

export default HeroPlayer;
