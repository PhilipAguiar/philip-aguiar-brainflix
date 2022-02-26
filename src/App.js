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
    simpleVideoList: videoListSimple,
    clickedVideo: videoListDetailed[0],
  };

  clickedVideo = (event) => {
    let newVideoList = [...this.state.videoList];

    let newClickedVideo = newVideoList.find((video) => video.id === event.currentTarget.id);

    this.setState({
      clickedVideo: newClickedVideo,
    });
  };

  render() {
    const { title,image,timestamp,channel,views,likes,description,comments} = this.state.clickedVideo;
    const filteredVideoList = this.state.simpleVideoList.filter((video)=>{
      return video.id !== this.state.clickedVideo.id;
    })
    return (
      <>
        <Header />
        <ActiveVideo
        title={title} 
        image={image}
        timestamp={timestamp} 
        channel={channel}
        views= {views}
        likes = {likes}
        description = {description}
        comments= {comments}
        />
        <VideoList videoList={filteredVideoList} clickedVideo={this.clickedVideo} />
      </>
    );
  }
}

export default App;
