import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({comments,  timestampConverter }) {
    
  return <section className="comments">
      {comments.map((comment,index) => {
       return <CommentItem 
       key = {index} 
       comment = {comment}  
       timestampConverter = {timestampConverter} />
      })}
  </section>;
}

export default CommentList;
