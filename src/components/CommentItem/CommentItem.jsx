import "./CommentItem.scss"

function CommentItem(props) {
    console.log(props.comment)
  return (
    <div>
        <p>{props.comment.name}</p>
        <p>{props.comment.comment}</p>
        <p>{props.comment.likes}</p>
        <p>{props.comment.timestamp}</p>
    </div>
  )
}

export default CommentItem