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
    commentList:[]
  };

  componentDidMount() {
    apiUtils.getAll().then((response) => {
      this.setState({
        videoList: response.data,
      });
      
      if (this.props.routerProps.match.params.id) {
        this.setActiveVideo(this.props.routerProps.match.params.id);
      } else {
        this.setActiveVideo(response.data[0].id);
      }
    });
  }

  setActiveVideo = (activeId) => {
    if (activeId) {
      apiUtils.getVideoById(activeId).then((response) => {
        this.setState({
          activeVideo: response.data,
          commentList:response.data.comments
        });
        
      });
    } else {
      this.setDefaultVideo();
    }
  };

  setDefaultVideo = () => {
    apiUtils.getVideoById(this.state.videoList[0].id).then((response) => {
      this.setState({
        activeVideo: response.data,
      });
    });
  };

  addNewComment = (id,name,comment) => {
    apiUtils.postComment(id,name,comment).then(response=>{
      let newCommentList = [...this.state.commentList,response.data]
      this.setState({
        commentList: newCommentList,
      })
    })
    
  };

  componentDidUpdate(prevProps) {
    console.log(prevProps);
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
        <HeroPlayer image={this.state.activeVideo.image} />

        <section className="activeVideo">
          <VideoDescription video={this.state.activeVideo} timestampConverter={timestampConverter} />
          <CommentForm id={this.state.activeVideo.id} comments={this.state.commentList} addNewComment={this.addNewComment}/>
          <CommentList comments={this.state.commentList} timestampConverter={timestampConverter} />
        </section>

        <VideoList videoList={filteredVideoList} clickHandler={this.setActiveVideo} />
      </>
    );
  }
}

export default ActiveVideo;
