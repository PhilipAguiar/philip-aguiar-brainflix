import './VideoItem.scss'

function VideoItem({video}) {
  return (
    <div>
        <img src={video.image} alt="" />
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
    </div>
  )
}

export default VideoItem