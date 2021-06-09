import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import Image from "next/image"
import { getSpotifyData } from "~/helpers/spotify"

export default function MusicPage() {
  const { loading, error, tracks, artists } = getSpotifyData()

  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Music"
            subtitle="A glimpse into my taste in music from Spotify."
          />
          {loading ? (
            <h1 className="text-gray-400 dark:text-gray-500">Loading...</h1>
          ) : (
            <>
              <TracksList tracks={tracks} label="Recently Liked Songs" />
              <ArtistsList artists={artists} label="Favorite Artists" />
            </>
          )}
        </div>
      </CenteredColumn>
    </Page>
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
              key={artist.name}
              className="flex py-2 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
              href={artist.url}
            >
              <Image
                src={artist.image}
                width={64}
                height={64}
                layout="fixed"
                alt={`spotify artist icon`}
                className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
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
              key={track.title}
              className="flex py-2 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
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
                  <p className="mt-2 font-medium text-black dark:text-gray-100">
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
