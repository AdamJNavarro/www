import querystring from "querystring"

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/tracks`
const ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/following?type=artist`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  })

  return response.json()
}

export const getLastLikedTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(`${TRACKS_ENDPOINT}?limit=5`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getSpotifyArtists = async () => {
  const { access_token } = await getAccessToken()
  const response = await fetch(`${ARTISTS_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  const {
    artists: { items },
  } = await response.json()
  const artists = items.map((item) => ({
    name: item.name,
    image: item.images[item.images.length - 1].url,
    url: item.external_urls.spotify,
  }))
  return artists
}
