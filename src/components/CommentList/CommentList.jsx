import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({comments,  timestampConverter }) {
    
  return <section className="comments">
      {comments.map((comment,index) => {
       return <CommentItem 
       key = {index} 
       name = {comment.name}  
       timestamp = {comment.timestamp}  
       comment = {comment.comment}  
       timestampConverter = {timestampConverter} />
      })}
  </section>;
}

export default CommentList;
