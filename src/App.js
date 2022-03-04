import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";
import apiUtils from "./utils/api";
import timestampConverter from "./utils/TimeStamp";

class App extends React.Component {
  state = {
    videoList: null,
    clickedVideo: null,
    defaultVideo: null,
  };

  componentDidMount() {
    apiUtils.getAll().then((response) => {
      console.log(response.data);
      this.setState({
        videoList: response.data,
      });
      this.getClickedVideo(this.state.videoList[0].id);
      this.setDefaultVideo();
    });
  }

  getClickedVideo = (clickedId) => {
    apiUtils.getVideoById(clickedId).then((response) => {
      this.setState({
        clickedVideo: response.data,
      });
    });
  };

  setDefaultVideo = () => {
    apiUtils.getVideoById(this.state.videoList[0].id).then((response) => {
      this.setState({
        defaultVideo: response.data
      });
    });
  };

  render() {
    if (!this.state.videoList || !this.state.clickedVideo || !this.state.defaultVideo) {
      return <p>Loading...</p>;
    }

    const filteredVideoList = this.state.videoList.filter((video) => {
      return video.id !== this.state.clickedVideo.id;
    });

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Redirect to={`/video/${this.state.videoList[0].id}`} exact from="/" /> */}
          <Route path="/" exact render={() => <Home clickedVideo={this.state.defaultVideo} timestampConverter={timestampConverter} />} />
          <Route path="/upload" render={() => <Upload />} />
          <Route path="/video/:id" render={() => <ActiveVideo clickedVideo={this.state.clickedVideo} timestampConverter={timestampConverter} />} />
        </Switch>
        <VideoList videoList={filteredVideoList} clickHandler={this.getClickedVideo} />
      </BrowserRouter>
    );
  }
}

export default App;
