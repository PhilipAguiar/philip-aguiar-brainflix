import "../App.scss";
import videoListDetailed from "../data/video-details.json";
import videoListSimple from "../data/videos.json";
import HeroPlayer from "../components/HeroPlayer/HeroPlayer";
import React from "react";
import ActiveVideo from "../components/ActiveVideo/ActiveVideo";
import VideoList from "../components/VideoList/VideoList";
import timestampConverter from "../modules/TimeStamp";

class Home extends React.Component {
  state = {
    videoList: videoListDetailed,
    simpleVideoList: videoListSimple,
    clickedVideo: videoListDetailed[0],
  };

  clickedVideo = (clickedId) => {
    let newVideoList = [...this.state.videoList];

    let newClickedVideo = newVideoList.find((video) => {
      return video.id === clickedId;
    });

    this.setState({
      clickedVideo: newClickedVideo,
    });
  };

  render() {
    const {
      title,
      image,
      timestamp,
      channel,
      views,
      likes,
      description,
      comments,
    } = this.state.clickedVideo;
    const filteredVideoList = this.state.simpleVideoList.filter((video) => {
      return video.id !== this.state.clickedVideo.id;
    });
    return (
      <>
        <HeroPlayer image={image} />
        
          <ActiveVideo
            title={title}
            image={image}
            timestamp={timestamp}
            channel={channel}
            views={views}
            likes={likes}
            description={description}
            comments={comments}
            timestampConverter={timestampConverter}
          />
          <VideoList
            videoList={filteredVideoList}
            clickedVideo={this.clickedVideo}
          />
        
      </>
    );
  }
}

export default Home;
