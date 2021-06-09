const VideoPlayer = ({ source }: any) => {
  return (
    <MediaContainer>
      <video
        autoPlay
        playsInline
        muted
        loop
        key="vid-123"
        className="w-full h-full rounded-lg overflow-hidden"
      >
        <source src={source} type="video/mp4" />
      </video>
    </MediaContainer>
  )
}

const MediaContainer = ({ children }: any) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg  p-4 flex items-center justify-center w-full">
      {children}
    </div>
  )
}

export default VideoPlayer
