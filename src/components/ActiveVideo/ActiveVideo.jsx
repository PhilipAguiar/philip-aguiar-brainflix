import React from "react";
import "./ActiveVideo.scss";
import HeroPlayer from "../HeroPlayer/HeroPlayer";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";

function ActiveVideo({ video }) {
  return (
    <section>
      <HeroPlayer video={video}/>
      <VideoDescription video={video} />
      <CommentForm video={video} />
      <CommentList comments={video.comments} />
    </section>
  );
}

export default ActiveVideo;
