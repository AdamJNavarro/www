import { CenteredColumn, Page } from "~/components/layout"

import Image from "next/image"
import { getSpotifyData } from "~/helpers/spotify"

const spotifyProfileUrl = "https://open.spotify.com/user/adamjosephnavarro"

export default function MusicPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
              Music
            </h1>
            <p className="prose font-sans text-lg md:text-xl text-gray-800 dark:text-gray-200">
              A glimpse into my taste in music from{" "}
              <a href={spotifyProfileUrl}>Spotify</a>.
            </p>
          </div>

          <SpotifyContent />
        </div>
      </CenteredColumn>
    </Page>
  )
}

const SpotifyContent = () => {
  const { loading, error, tracks, artists } = getSpotifyData()

  if (loading)
    return <h1 className="text-gray-400 dark:text-gray-500">Loading...</h1>
  if (error)
    return <h1 className="text-red-600 dark:text-red-500">An error occurred.</h1>

  return (
    <>
      <TracksList label="Recently Liked Songs" tracks={tracks} />
      <ArtistsList artists={artists} label="Favorite Artists" />
    </>
  )
}

const ArtistsList = ({ artists, label }) => {
  return (
    <div className="space-y-6">
      <h4 className="capitalize font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="space-y-2">
        {artists.map((artist) => {
          return (
            <a
              className="flex py-2 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
              href={artist.url}
              key={artist.name}
            >
              <Image
                alt={`spotify artist icon`}
                className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                height={56}
                layout="fixed"
                src={artist.image}
                width={56}
              />

              <div className="flex flex-1  pl-5  items-center  ">
                <p className=" text-lg font-medium text-black dark:text-gray-100">
                  {artist.name}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

const TracksList = ({ tracks, label }) => {
  return (
    <div className="space-y-6">
      <h4 className="capitalize font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="space-y-2">
        {tracks.map((track) => {
          return (
            <a
              className="flex py-2 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
              href={track.songUrl}
              key={track.title}
            >
              <Image
                alt={`spotify track icon`}
                className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                height={56}
                layout="fixed"
                src={track.image.url}
                width={56}
              />

              <div className="justify-center flex-1 col-span-3 pl-5 space-y-2 ">
                <div className="space-y-1 ">
                  <p className="mt-0.5 font-medium text-black dark:text-gray-100">
                    {track.title}
                  </p>
                  <p className="text-base font-normal leading-snug text-gray-900 dark:text-gray-300">
                    {track.artist}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
