import React, { Component } from "react";
import "./ActiveVideo.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoDescription from "../VideoDescription/VideoDescription";
import HeroPlayer from "../HeroPlayer/HeroPlayer";
import VideoList from "../VideoList/VideoList";

class ActiveVideo extends Component {
  componentDidUpdate(prevProps) {
    const videoId = this.props.routerProps.match.params.id;

    if (prevProps.activeVideo.id !== videoId) {
      this.props.setActiveVideo(this.props.routerProps.match.params.id);
    }
  }

  render() {
    const { activeVideo, timestampConverter, videoList, clickHandler } = this.props;
    return (
      <>
        <HeroPlayer image={activeVideo.image} />

        <section className="activeVideo">
          <VideoDescription video={activeVideo} timestampConverter={timestampConverter} />
          <CommentForm comments={activeVideo.comments} />
          <CommentList comments={activeVideo.comments} timestampConverter={timestampConverter} />
          <VideoList videoList={videoList} clickHandler={clickHandler} />
        </section>
      </>
    );
  }
}

export default ActiveVideo;
