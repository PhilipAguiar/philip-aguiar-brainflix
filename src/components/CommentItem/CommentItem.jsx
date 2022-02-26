import "./CommentItem.scss"

function CommentItem({comment}) {
    console.log(comment)
  return (
    <div>
        <p>{comment.name}</p>
        <p>{comment.comment}</p>
        <p>{comment.likes}</p>
        <p>{comment.timestamp}</p>
    </div>
  )
}

export default CommentItem