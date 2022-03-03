import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";
import apiUtils from "./utils/api";
import timestampConverter from "./utils/TimeStamp";

class App extends React.Component {
  state = {
    videoList: null,
    clickedVideo: null,
  };

  componentDidMount() {
    apiUtils.getAll().then((response) => {
      console.log(response.data)
      this.setState({
        videoList: response.data,
      });
      apiUtils.getVideoById(this.state.videoList[0].id).then((response) => {
        console.log(response.data)
        this.setState({
          clickedVideo: response.data,
        });
      });
    });
  }

  render() {
    if (!this.state.videoList || !this.state.clickedVideo) {
      return <p>Loading...</p>;
    }

    const filteredVideoList = this.state.videoList.filter((video) => {
      return video.id !== this.state.clickedVideo.id;
    });
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home clickedVideo={this.state.clickedVideo} timestampConverter={timestampConverter} />} />
          <Route path="/upload" render={() => <Upload />} />
          <Route path="/video:id" render={() => <ActiveVideo clickedVideo={this.state.clickedVideo} />} />
        </Switch>
        <VideoList videoList={filteredVideoList} clickedVideo={this.state.clickedVideo} />
      </BrowserRouter>
    );
  }
}

export default App;
