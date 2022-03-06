import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({comments,  timestampConverter }) {
    
  return <section className="comments">
      {comments.sort((a,b)=>{return b.timestamp-a.timestamp}).map((comment,index) => {
       return <CommentItem 
       key = {index} 
       commentObj ={comment}
       timestampConverter = {timestampConverter} />
      })}
  </section>;
}

export default CommentList;
