import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

function VideoList({ videoList, clickHandler }) {
  
  return (
    <section className="next-videos">
      <h5 className="next-videos__title">NEXT VIDEOS</h5>

      {videoList.map((video) => {
        return <VideoItem key={video.id} 
                          id = {video.id} 
                          image = {video.image}
                          title = {video.title}
                          channel = {video.channel}
                          clickHandler = {clickHandler}/>;
      })}
    </section>
  );
}

export default VideoList;
