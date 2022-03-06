import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";
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
          <Route path="/" exact render={(routerProps) => (
              <Home
                routerProps={routerProps}
                timestampConverter={timestampConverter}
                activeVideo={this.state.activeVideo}
                setActiveVideo={this.setActiveVideo}
                videoList={filteredVideoList}
                clickHandler={this.setActiveVideo}
              />
            )}
          />

          <Route path="/upload" render={(routerProps) => <Upload routerProps={routerProps}/>} />
          <Route
            path="/video/:id"
            render={(routerProps) => (
              <Home
                routerProps={routerProps}
                timestampConverter={timestampConverter}
                activeVideo={this.state.activeVideo}
                setActiveVideo={this.setActiveVideo}
                videoList={filteredVideoList}
                clickHandler={this.setActiveVideo}
              />
            )}
          />
        </Switch>

        
      </BrowserRouter>
    );
  }
}

export default App;
