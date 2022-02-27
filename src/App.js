import "./App.scss";
import videoListDetailed from "./data/video-details.json";
import videoListSimple from "./data/videos.json";
import Header from "./components/Header/Header";
import HeroPlayer from "./components/HeroPlayer/HeroPlayer";
import React from "react";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";

class App extends React.Component {
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
    const { title, image, timestamp, channel, views, likes, description, comments } = this.state.clickedVideo;
    const filteredVideoList = this.state.simpleVideoList.filter((video) => {
      return video.id !== this.state.clickedVideo.id;
    });
    return (
      <>
        <Header />
        <HeroPlayer image={image} />
        <div className="app__desktop-container">
          <ActiveVideo title={title} image={image} timestamp={timestamp} channel={channel} views={views} likes={likes} description={description} comments={comments} />
          <VideoList videoList={filteredVideoList} clickedVideo={this.clickedVideo} />
        </div>
      </>
    );
  }
}

export default App;
