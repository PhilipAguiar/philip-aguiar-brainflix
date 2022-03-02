import "./App.scss";
import videoListDetailed from "./data/video-details.json";
import videoListSimple from "./data/videos.json";
import Header from "./components/Header/Header";
import HeroPlayer from "./components/HeroPlayer/HeroPlayer";
import React from "react";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";
import timestampConverter from "./modules/TimeStamp";
import Home from "./pages/Home";

class App extends React.Component {
  

  render() {
    
    return (
      <>
      <Header/>
        <Home />
      </>
    );
  }
}

export default App;
