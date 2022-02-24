import React from 'react';
import "./HeroPlayer.scss";

function HeroPlayer(props) {

    console.log(props.videoList)
  return (
    <video className='hero__player' poster={props.videoList[0].image} controls></video>
  )
}

export default HeroPlayer