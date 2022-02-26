import "./CommentForm.scss";
import comment from "../../assets/Images/add_comment.svg";

function CommentForm({ comments }) {
  return (
    <section className="post">
      <h5 className="post__count">{comments.length} Comments</h5>
      <div className="post__wrapper">
        <div className="post__image-container">
          <div className="post__image"></div>
        </div>
        <form className="post__form">
          <label className="post__label">Join the Conversation</label>
          <textarea name="comment" className="post__input" placeholder="Add a new comment"></textarea>
          <button className="post__button">
            <img className="post__button-image" src={comment} alt="" />
            <p>COMMENT</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
