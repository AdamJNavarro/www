import { useEffect, useState } from "react"

import Image from "next/image"
import { getLastLikedTracks } from "~/helpers/spotify"

const LatestLikedSongs = ({}: any) => {
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    loadTracks()
  }, [])

  const loadTracks = async () => {
    let response = await getLastLikedTracks()
    const { items } = await response.json()
    const tracks = items.map((item) => ({
      artist: item.track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: item.track.external_urls.spotify,
      title: item.track.name,
      image: item.track.album.images[item.track.album.images.length - 1],
    }))
    setTracks(tracks)
    setLoading(false)
  }

  if (loading) return null

  return (
    <div className="space-y-2.5">
      {tracks.map((track) => {
        return (
          <a
            key={track.title}
            className="flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
            href={track.songUrl}
          >
            <Image
              src={track.image.url}
              width={64}
              height={64}
              layout="fixed"
              alt={`spotify track icon`}
              className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
            />

            <div className="justify-center flex-1 col-span-3 pl-5 space-y-2 ">
              <div className="space-y-1 ">
                <p className="mt-2 font-medium text-primary">{track.title}</p>
                <p className="text-base font-normal leading-snug text-tertiary">
                  {track.artist}
                </p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default LatestLikedSongs
