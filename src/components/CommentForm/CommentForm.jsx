import "./CommentForm.scss";
import commentImage from "../../assets/Images/add_comment.svg";

function CommentForm({ comments }) {
  const cancelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="post">
      <h5 className="post__count">{comments.length} Comments</h5>
      <div className="post__wrapper">
        <div className="post__image-container">
          <div className="post__image"></div>
        </div>
        <form className="post__form">
          <label className="post__label" htmlFor="comment">
            Join the Conversation
          </label>
          <div className="post__comment-wrapper">
            <textarea name="comment" className="post__input" placeholder="Add a new comment"></textarea>
            <input name="comment" className="post__input post__input--tablet" placeholder="Add a new comment"></input>
            <button className="post__button" onClick={cancelSubmit}>
              <img className="post__button-image" src={commentImage} alt="" />
              <p>COMMENT</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
