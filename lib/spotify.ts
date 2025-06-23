const client_id = process.env.SPOTIFY_CLIENT_ID!
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

export const getAccessToken = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return res.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  if (res.status === 204 || res.status > 400) {
    // fallback to last played
    const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const recent = await recentRes.json()
    const item = recent.items?.[0]?.track

    return {
      isPlaying: false,
      title: item?.name,
      artist: item?.artists.map((a: any) => a.name).join(', '),
      url: item?.external_urls.spotify,
    }
  }

  const track = await res.json()

  return {
    isPlaying: track.is_playing,
    title: track.item.name,
    artist: track.item.artists.map((a: any) => a.name).join(', '),
    url: track.item.external_urls.spotify,
  }
}
