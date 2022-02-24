import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList(props) {
    
  return <section className="comments">
      {props.comments.map(comment => {
       return <CommentItem comment = {comment}/>
      })}
  </section>;
}

export default CommentList;
