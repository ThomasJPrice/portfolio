import { NextResponse } from 'next/server'
import { getAccessToken } from '@/lib/spotify'
import { estimateTabsOpened, getGithubCommitsThisYear, getSpotifyMinutesThisYear } from '@/lib/stats'

export async function GET() {
  const [githubCommits, spotifyMinutes, tabsOpened] = await Promise.all([
    getGithubCommitsThisYear(),
    getSpotifyMinutesThisYear(),
    estimateTabsOpened()
  ])

  return NextResponse.json({ githubCommits, spotifyMinutes, tabsOpened })
}
