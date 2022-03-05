import "../App.scss";
import React from "react";
import ActiveVideo from "../components/ActiveVideo/ActiveVideo";

class Home extends React.Component {
  render() {
    const { video, timestampConverter } = this.props;
    return (
      <>
        <ActiveVideo activeVideo={video} timestampConverter={timestampConverter} />
      </>
    );
  }
}

export default Home;
