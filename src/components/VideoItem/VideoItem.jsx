import './VideoItem.scss'

function VideoItem({video , clickedVideo}) {
  return (
    <div id={video.id} onClick={clickedVideo}>
        <img src={video.image} alt="" />
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
    </div>
  )
}

export default VideoItem