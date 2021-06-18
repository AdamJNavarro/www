export type DancePerformance = {
  song: string
  videoUrl: string
  posterUrl: string
  spotifyUrl?: string
  choreographer: string
  location: string
}

export const dances = [
  {
    song: "No Guidance",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623355925/videos/hiphop/no-guidance.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623355925/videos/hiphop/no-guidance.jpg",
  },
  {
    song: "Buzzin",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623352813/videos/hiphop/buzzin.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623352813/videos/hiphop/buzzin.jpg",
  },
  {
    song: "Latch",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623861991/videos/hiphop/latch.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623861991/videos/hiphop/latch.jpg",
  },
]
