import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import VideoList from "./components/VideoList/VideoList";
import apiUtils from "./utils/api";
import timestampConverter from "./utils/TimeStamp";

class App extends React.Component {
  state = {
    videoList: null,
    activeVideo: null,
  };

  componentDidMount() {
    apiUtils.getAll().then((response) => {
      this.setState({
        videoList: response.data,
      });

      this.setActiveVideo(response.data[0].id);
    });
  }

  setActiveVideo = (activeId) => {
    if (activeId) {
      apiUtils.getVideoById(activeId).then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      });
    }
    else{
      this.setDefaultVideo()
    }
  };

  setDefaultVideo = () => {
    apiUtils.getVideoById(this.state.videoList[0].id).then((response) => {
      this.setState({
        activeVideo: response.data,
      });
    });
  };

  render() {
    if (!this.state.videoList || !this.state.activeVideo) {
      return <p>Loading...</p>;
    }

    const filteredVideoList = this.state.videoList.filter((video) => {
      return video.id !== this.state.activeVideo.id;
    });

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <ActiveVideo
                routerProps={routerProps}
                timestampConverter={timestampConverter}
                activeVideo={this.state.activeVideo}
                setActiveVideo={this.setActiveVideo}
              />
            )}
          />

          <Route path="/upload" render={() => <Upload />} />
          <Route
            path="/video/:id"
            render={(routerProps) => (
              <ActiveVideo
                routerProps={routerProps}
                timestampConverter={timestampConverter}
                activeVideo={this.state.activeVideo}
                setActiveVideo={this.setActiveVideo}
              />
            )}
          />
        </Switch>

        <VideoList videoList={filteredVideoList} clickHandler={this.setActiveVideo} />
      </BrowserRouter>
    );
  }
}

export default App;
