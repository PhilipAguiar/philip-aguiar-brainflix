import "./VideoDescription.scss";
import viewsIcon from "../../assets/Images/views.svg";
import likeIcon from "../../assets/Images/likes.svg";

function VideoDescription({title, timestamp, channel, views, likes, description}) {
  const date = new Date(parseInt(timestamp));
  
  return (
    <div className="description">
      <h1 className="description__title">{title}</h1>
      <div className="description__container">
        <div className="description__info-wrapper">
          <h4 className="description__stat description__stat--bold">By {channel}</h4>
          <p className="description__stat description__stat--bottom">{date.toLocaleDateString("en-US")}</p>
        </div>
        <div className="description__info-wrapper description__info-wrapper--right">
          <div className="description__stats-wrapper">
            <img className="description__icon" src={viewsIcon} alt="eye" />
            <p className="description__stat">{views}</p>
          </div>
          <div className="description__stats-wrapper description__stats-wrapper--bottom">
            <img className="description__icon" src={likeIcon} alt="heart" />
            <p className="description__stat">{likes}</p>
          </div>
        </div>
      </div>
      <p className="description__text">{description}</p>
    </div>
  );
}

export default VideoDescription;
