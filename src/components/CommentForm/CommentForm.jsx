import "./CommentForm.scss";

function CommentForm(props) {
  return (
    <section className="post">
      <h5 className="post__count">{props.video.comments.length} Comments</h5>
      <div className="post__wrapper">
        <div className="post__image-container">
          <div className="post__image"></div>
        </div>
        <form className="post__form">
          <label className="post__label">Join the Conversation</label>
          <textarea name="comment" className="post__input" placeholder="Add a new comment"></textarea>
          <button className="post__button">COMMENT</button>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
