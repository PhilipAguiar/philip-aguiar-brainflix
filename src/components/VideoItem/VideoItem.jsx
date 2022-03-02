import "./VideoItem.scss";

function VideoItem({ id, image, title, channel, clickedVideo }) {
  return (
    <div
      className="videoItem"
      onClick={() => {
        clickedVideo(id);
      }}
    >
      <div className="videoItem__image-wrapper">
        <img className="videoItem__image" src={image} alt="" />
      </div>
      <div className="videoItem__text-wrapper">
        <h3 className="videoItem__title">{title}</h3>
        <p className="videoItem__channel">{channel}</p>
      </div>
    </div>
  );
}

export default VideoItem;
