import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

function VideoList({ videoList, clickedVideo }) {
  console.log(videoList);
  return (
    <section>
      <h5>NEXT VIDEOS</h5>

      {videoList.map((video) => {
        return <VideoItem video = {video} clickedVideo = {clickedVideo}/>;
      })}
    </section>
  );
}

export default VideoList;
