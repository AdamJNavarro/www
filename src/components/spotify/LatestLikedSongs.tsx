import { useEffect, useState } from "react"

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
    }))
    setTracks(tracks)
    setLoading(false)
  }

  if (loading) return null

  return (
    <div className="prose space-y-2.5">
      {tracks.map((track) => {
        return <a href={track.songUrl}>{track.title}</a>
      })}
    </div>
  )
}

export default LatestLikedSongs
