import "./App.css";
import videoListDetailed from "./data/video-details.json";
import videoListSimple from "./data/videos.json";
import Header from "./components/Header/Header";
import React from "react";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";

class App extends React.Component {
  state = {
    videoList: videoListDetailed,
    simpleVideoList:  videoListSimple
  };

  render() {
    return (
      <>
        <Header />
        <ActiveVideo video={this.state.videoList[0]} />
        <VideoList videoList={videoListSimple}/>
      </>
    );
  }
}

export default App;
