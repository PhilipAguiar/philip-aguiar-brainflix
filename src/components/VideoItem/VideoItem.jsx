import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ video, clickHandler }) {
  const { id, image, title, channel } = video;

  return (
    <NavLink className="videoItem__link" to={`/video/${id}`}>
      <div
        className="videoItem"
      >
        <div className="videoItem__image-wrapper">
          <img className="videoItem__image" src={image} alt="" />
        </div>
        <div className="videoItem__text-wrapper">
          <h3 className="videoItem__title">{title}</h3>
          <p className="videoItem__channel">{channel}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default VideoItem;
