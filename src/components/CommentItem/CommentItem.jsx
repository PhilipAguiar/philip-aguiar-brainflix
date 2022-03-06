import "./CommentItem.scss";

function CommentItem({ commentObj, timestampConverter, avatar }) {
  const { name, timestamp, comment } = commentObj;
  return (
    <div className="comment">
      <div className="comment__image-container">
        {avatar ? 
        <div className="comment__image comment__image--active"></div> : 
        <div className="comment__image"></div>}</div>

      <div className="comment__info-container">
        <div className="comment__user-wrapper">
          <p className="comment__name">{name}</p>
          <p className="comment__date">{timestampConverter(timestamp)}</p>
        </div>
        <p className="comment__text">{comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
