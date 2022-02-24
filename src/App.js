import logo from "./logo.svg";
import "./App.css";
import videoListJSON from "./data/video-details.json";
import Header from "./components/Header/Header";
import HeroPlayer from "./components/HeroPlayer/HeroPlayer";
import React from "react";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";

class App extends React.Component {
  state = {
    videoList: videoListJSON,
  };

  render() {
    return (
      <>
        <Header />
        <ActiveVideo video={this.state.videoList[0]} />
      </>
    );
  }
}

export default App;
