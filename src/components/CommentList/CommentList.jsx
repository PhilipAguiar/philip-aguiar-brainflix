import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList(props) {
    
  return <section className="comments">
      {props.comments.map((comment,index) => {
       return <CommentItem key = {index} comment = {comment}/>
      })}
  </section>;
}

export default CommentList;
