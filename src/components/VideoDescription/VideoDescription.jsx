import "./VideoDescription.scss";
import viewsIcon from "../../assets/Images/views.svg";
import likeIcon from "../../assets/Images/likes.svg";

function VideoDescription(props) {
  const date = new Date(parseInt(props.video.timestamp));

  return (
    <div className="description">
      <h1 className="description__title">{props.video.title}</h1>
      <div className="description__container">
        <div className="description__info-wrapper">
          <h4 className="description__stat description__stat--bold">By {props.video.channel}</h4>
          <p className="description__stat description__stat--bottom">{date.toLocaleDateString("en-US")}</p>
        </div>
        <div className="description__info-wrapper description__info-wrapper--right">
          <div className="description__stats-wrapper">
            <img className="description__icon" src={viewsIcon} alt="eye" />
            <p className="description__stat">{props.video.views}</p>
          </div>
          <div className="description__stats-wrapper description__stats-wrapper--bottom">
            <img className="description__icon" src={likeIcon} alt="heart" />
            <p className="description__stat">{props.video.likes}</p>
          </div>
        </div>
      </div>
      <p className="description__text">{props.video.description}</p>
    </div>
  );
}

export default VideoDescription;
