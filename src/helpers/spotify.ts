import querystring from "querystring"

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
//const refresh_token =
// "AQCDmcCr-y0HXW6GFs5O5U2Efx-jrdNmX7WaTgljxiptpqL7tuT5KMdJh1_XuLAr3XpDPtXRII1UrctvnNhxLDvvMUnfe74ia6yZ2HuiO0oWnlGTQkRYEyvQoYveOUXGKCk"

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  console.log("SPOTIFY CLI ID", client_id)
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
const TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/tracks`

/// item[x].track.[artists, name]
export const getLastLikedTracks = async () => {
  const { access_token } = await getAccessToken()
  console.log("acc tok:", access_token)
  return fetch(`${TRACKS_ENDPOINT}?limit=3`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
