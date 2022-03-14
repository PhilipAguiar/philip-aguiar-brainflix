import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({ comments, timestampConverter, videoId, deleteComment }) {
  return (
    <section className="comments">
      {comments
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
        .map((comment, index) => {
          if (comment.name === "BrainStation Man") {
            return (
              <CommentItem
                key={index}
                videoId={videoId}
                commentObj={comment}
                timestampConverter={timestampConverter}
                deleteComment={deleteComment}
                avatar={true}
              />
            );
          } else {
            return (
              <CommentItem key={index} videoId={videoId} commentObj={comment} timestampConverter={timestampConverter} deleteComment={deleteComment} />
            );
          }
        })}
    </section>
  );
}

export default CommentList;
