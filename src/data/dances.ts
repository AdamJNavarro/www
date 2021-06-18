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
    song: "No Guidance by Chris Brown ft. Drake",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623355925/videos/hiphop/no-guidance.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623355925/videos/hiphop/no-guidance.jpg",
    spotifyUrl:
      "https://open.spotify.com/track/6XHVuErjQ4XNm6nDPVCxVX?si=3359cdcb517745e2",
    choreographer: "Chris Delica",
    choreographerUrl: "https://www.instagram.com/chris_delica/",
  },
  {
    song: "Buzzin by Mann",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623352813/videos/hiphop/buzzin.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623352813/videos/hiphop/buzzin.jpg",
    spotifyUrl:
      "https://open.spotify.com/track/0wpbWr0vI9mIV6WpO5CqPi?si=b0df4a77bc2c46b0",
    choreographer: "Regina Steiber",
    choreographerUrl: "https://www.instagram.com/reggiestiebs/",
  },
  {
    song: "Latch by Disclosure ft. Sam Smith",
    videoUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/v1623861991/videos/hiphop/latch.mp4",
    posterUrl:
      "https://res.cloudinary.com/dkddfip9j/video/upload/so_0.0/v1623861991/videos/hiphop/latch.jpg",
    spotifyUrl:
      "https://open.spotify.com/track/1DunhgeZSEgWiIYbHqXl0c?si=b39e8ccd31414982",
    choreographer: "Chris Delica",
    choreographerUrl: "https://www.instagram.com/chris_delica/",
  },
]
