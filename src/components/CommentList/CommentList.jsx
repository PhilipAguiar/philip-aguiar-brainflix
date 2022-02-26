import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({comments}) {
    
  return <section className="comments">
      {comments.map((comment,index) => {
       return <CommentItem key = {index} comment = {comment}/>
      })}
  </section>;
}

export default CommentList;
