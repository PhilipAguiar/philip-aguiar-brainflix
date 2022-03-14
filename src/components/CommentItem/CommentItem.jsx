import "./CommentItem.scss";
import deleteImage from "../../assets/Images/delete_black_24dp.svg";

function CommentItem({ commentObj, timestampConverter, videoId, avatar, deleteComment }) {
  const { name, timestamp, comment, id } = commentObj;

  return (
    <div className="comment">
      <div className="comment__image-container">
        {avatar ? <div className="comment__image comment__image--active"></div> : <div className="comment__image"></div>}
      </div>

      <div className="comment__info-container">
        <div className="comment__user-wrapper">
          <p className="comment__name">{name}</p>
          <p className="comment__date">{timestampConverter(timestamp)}</p>
        </div>
        <p className="comment__text">{comment}</p>
      </div>

      <img className="comment__delete" src={deleteImage} alt="delete" onClick={() => deleteComment(videoId, id)} />
    </div>
  );
}

export default CommentItem;
