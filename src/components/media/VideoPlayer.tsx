const VideoPlayer = ({ source }: any) => {
  return (
    <video
      playsInline
      muted
      loop
      key="vid-123"
      className="w-full h-full rounded-lg overflow-hidden"
    >
      <source src={source} />
    </video>
  )
}

export default VideoPlayer
