import "./CommentForm.scss";
import commentImage from "../../assets/Images/add_comment.svg";
import { Component, createRef } from "react";

class CommentForm extends Component {
  state = {
    error: false,
  };

  render() {
    const { id, comments, addNewComment } = this.props;
    // id, comments, addNewComment
    const commentRef = createRef();

    const cancelSubmit = (e) => {
      e.preventDefault();
      if (commentRef.current.value === "") {
        this.setState({ error: true });
      } else {
        addNewComment(id, "BrainStation Man", commentRef.current.value);
        this.setState({ error: false });
      }
      commentRef.current.value = "";
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
              {this.state.error ? (
                <textarea name="comment" className="post__input post__input--error" ref={commentRef} placeholder="Add a new comment"></textarea>
              ) : (
                <textarea name="comment" className="post__input" ref={commentRef} placeholder="Add a new comment"></textarea>
              )}

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
}
export default CommentForm;
