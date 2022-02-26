import "./VideoItem.scss";

function VideoItem({ video, clickedVideo }) {
  return (
    <div className="videoItem" id={video.id} onClick={clickedVideo}>
      <div className="videoItem__image-wrapper">
        <img className="videoItem__image" src={video.image} alt="" />
      </div>
      <div className="videoItem__text-wrapper">
        <h3 className="videoItem__title">{video.title}</h3>
        <p className="videoItem__channel">{video.channel}</p>
      </div>
    </div>
  );
}

export default VideoItem;
