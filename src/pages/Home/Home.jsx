import React, { Component } from "react";
import "./Home.scss";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import HeroPlayer from "../../components/HeroPlayer/HeroPlayer";
import VideoList from "../../components/VideoList/VideoList";
import apiUtils from "../../utils/api";
import timestampConverter from "../../utils/TimeStamp";

class ActiveVideo extends Component {
  state = {
    videoList: null,
    activeVideo: null,
  };

  componentDidMount() {
    apiUtils
      .getAll()
      .then((response) => {
        this.setState({
          videoList: response.data,
        });

        if (this.props.routerProps.match.params.id) {
          this.setActiveVideo(this.props.routerProps.match.params.id);
        } else {
          this.setActiveVideo(response.data[0].id);
        }
      })
      .catch((error) => console.log(error));
  }

  setActiveVideo = (activeId) => {
    if (activeId) {
      apiUtils
        .getVideoById(activeId)
        .then((response) => {
          this.setState({
            activeVideo: response.data,
            commentList: response.data.comments,
          });
        })
        .catch((error) => console.log(error));
    } else {
      this.setDefaultVideo();
    }
  };

  setDefaultVideo = () => {
    apiUtils
      .getVideoById(this.state.videoList[0].id)
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  addNewComment = (id, name, comment) => {
    apiUtils
      .postComment(id, name, comment)
      .then(() => {
        this.setActiveVideo(id);
      })
      .catch((error) => console.log(error));
  };

  deleteComment = (videoId, commentId) => {
    apiUtils
      .deleteComment(videoId, commentId)
      .then(() => {
        this.setActiveVideo(videoId);
      })
      .catch((error) => console.log(error));
  };

  componentDidUpdate(prevProps) {
    const videoId = this.props.routerProps.match.params.id;

    if (prevProps.routerProps.match.params.id !== videoId) {
      this.setActiveVideo(this.props.routerProps.match.params.id);
    }
  }

  render() {
    if (!this.state.videoList || !this.state.activeVideo) {
      return <p>Loading...</p>;
    }

    const filteredVideoList = this.state.videoList.filter((video) => {
      return video.id !== this.state.activeVideo.id;
    });

    return (
      <>
        <HeroPlayer video={this.state.activeVideo} />

        <section className="activeVideo">
          <VideoDescription video={this.state.activeVideo} timestampConverter={timestampConverter} setActiveVideo={this.setActiveVideo} />
          <CommentForm id={this.state.activeVideo.id} comments={this.state.activeVideo.comments} addNewComment={this.addNewComment} />
          <CommentList
            videoId={this.state.activeVideo.id}
            comments={this.state.commentList}
            timestampConverter={timestampConverter}
            deleteComment={this.deleteComment}
          />
        </section>

        <VideoList videoList={filteredVideoList} clickHandler={this.setActiveVideo} />
      </>
    );
  }
}

export default ActiveVideo;
