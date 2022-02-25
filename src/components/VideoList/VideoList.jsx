import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

function VideoList({ videoList }) {
  console.log(videoList);
  return (
    <section>
      <h5>NEXT VIDEOS</h5>

      {videoList.map((video) => {
        return <VideoItem video = {video}/>;
      })}
    </section>
  );
}

export default VideoList;
