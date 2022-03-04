import React from "react";
import "./ActiveVideo.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";
import HeroPlayer from "../HeroPlayer/HeroPlayer";

function ActiveVideo(props) {
  const { clickedVideo, timestampConverter } = props;

  return (
    <>
      <HeroPlayer image={clickedVideo.image} />

      <section className="activeVideo">
        <VideoDescription video={clickedVideo} timestampConverter={timestampConverter} />
        <CommentForm comments={clickedVideo.comments} />
        <CommentList comments={clickedVideo.comments} timestampConverter={timestampConverter} />
      </section>
    </>
  );
}

export default ActiveVideo;
