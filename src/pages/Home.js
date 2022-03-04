import "../App.scss";
import React from "react";
import ActiveVideo from "../components/ActiveVideo/ActiveVideo";

class Home extends React.Component {
  render() {
    const { clickedVideo, timestampConverter } = this.props;
    return (
      <>
        <ActiveVideo clickedVideo={clickedVideo} timestampConverter={timestampConverter} />
      </>
    );
  }
}

export default Home;
