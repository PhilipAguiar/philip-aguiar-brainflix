import "./CommentForm.scss";
import commentImage from "../../assets/Images/add_comment.svg";
import apiUtils from "../../utils/api";

function CommentForm({ id,comments }) {
  const cancelSubmit = (e) => {
    e.preventDefault();
    apiUtils.postComment(id,"test","testttt")
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
