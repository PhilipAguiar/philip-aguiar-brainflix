import "./CommentItem.scss";

function CommentItem({ comment,  timestampConverter }) {
  return (
    <div className="comment">
      <div className="comment__image-container">
        <div className="comment__image"></div>
      </div>
      <div className="comment__info-container">
        <div className="comment__user-wrapper">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">{timestampConverter(comment.timestamp)}</p>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
