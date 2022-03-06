import React, { Component } from "react";
import "./Home.scss";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import HeroPlayer from "../../components/HeroPlayer/HeroPlayer";
import VideoList from "../../components/VideoList/VideoList";

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
        </section>
        
        <VideoList videoList={videoList} clickHandler={clickHandler} />
      </>
    );
  }
}

export default ActiveVideo;
