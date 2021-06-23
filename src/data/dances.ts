export type DancePerformance = {
  song: string
  videoUrl: string
  posterUrl: string
  spotifyUrl?: string
  choreographer: string
  choreographerUrl: string
  location?: string
}

export const dances = [
  {
    choreographer: "Chris Delica",
    choreographerUrl: "https://www.instagram.com/chris_delica/",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623355925/videos/hiphop/no-guidance.jpg",
    song: "No Guidance by Chris Brown ft. Drake",
    spotifyUrl:
      "https://open.spotify.com/track/6XHVuErjQ4XNm6nDPVCxVX?si=3359cdcb517745e2",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623355925/videos/hiphop/no-guidance.mp4",
  },
  {
    choreographer: "Regina Steiber",
    choreographerUrl: "https://www.instagram.com/reggiestiebs/",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623352813/videos/hiphop/buzzin.jpg",
    song: "Buzzin by Mann",
    spotifyUrl:
      "https://open.spotify.com/track/0wpbWr0vI9mIV6WpO5CqPi?si=b0df4a77bc2c46b0",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623352813/videos/hiphop/buzzin.mp4",
  },
  {
    choreographer: "Chris Delica",
    choreographerUrl: "https://www.instagram.com/chris_delica/",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623861991/videos/hiphop/latch.jpg",
    song: "Latch by Disclosure ft. Sam Smith",
    spotifyUrl:
      "https://open.spotify.com/track/1DunhgeZSEgWiIYbHqXl0c?si=b39e8ccd31414982",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623861991/videos/hiphop/latch.mp4",
  },
]
