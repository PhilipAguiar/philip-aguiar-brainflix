import "./CommentForm.scss";

function CommentForm(props) {
  return (
    <section className="comments">
      <h5 className="comments__count">{props.video.comments.length} Comments</h5>
      <div className="comments__wrapper">
        <div className="comments__image-container">
          <div className="comments__image"></div>
        </div>
        <form className="comments__form">
          <label className="comments__label">Join the Conversation</label>
          <textarea name="comment" className="comments__input comments__input--large" placeholder="Add a new comment"></textarea>
          <button className="comments__button">COMMENT</button>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
