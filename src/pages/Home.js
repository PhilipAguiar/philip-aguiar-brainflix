import "../App.scss";
import React from "react";
import ActiveVideo from "../components/ActiveVideo/ActiveVideo";


class Home extends React.Component {

  render() {
    return (
      <>
          <ActiveVideo clickedVideo={this.props.clickedVideo} timestampConverter = {this.props.timestampConverter}/>
      </>
    );
  }
}

export default Home;
