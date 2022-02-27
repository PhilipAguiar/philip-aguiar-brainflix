import "./VideoDescription.scss";
import viewsIcon from "../../assets/Images/views.svg";
import likeIcon from "../../assets/Images/likes.svg";

function VideoDescription({ title, timestamp, channel, views, likes, description,timestampConverter }) {
  const postDate =  timestampConverter(timestamp);
  return (
    <div className="description">
      <h1 className="description__title">{title}</h1>
      <div className="description__container">
        <div className="description__info-wrapper">
          <h4 className="description__stat description__stat--bold description__stat--tablet">By {channel}</h4>
          <p className="description__stat description__stat--bottom">{postDate}</p>
        </div>
        <div className="description__info-wrapper description__info-wrapper--right">
          <div className="description__stats-wrapper">
            <img className="description__icon" src={viewsIcon} alt="eye" />
            <p className="description__stat description__stat--tablet">{views}</p>
          </div>
          <div className="description__stats-wrapper description__stats-wrapper--bottom description__stats-wrapper--desktop">
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
