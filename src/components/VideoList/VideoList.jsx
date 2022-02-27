import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

function VideoList({ videoList, clickedVideo }) {
  return (
    <section className="next-videos">
      <h5 className="next-videos__title">NEXT VIDEOS</h5>

      {videoList.map((video) => {
        return <VideoItem key={video.id} video = {video} clickedVideo = {clickedVideo}/>;
      })}
    </section>
  );
}

export default VideoList;
