export interface PointsLostTeam {
  slug: string
  name: string
}

// The 20 Premier League teams covered by the BBC match-events feed (2025-26),
// with slugs matching the site's /teams pages where a page already exists.
export const POINTS_LOST_TEAMS: PointsLostTeam[] = [
  { slug: 'arsenal', name: 'Arsenal' },
  { slug: 'aston-villa', name: 'Aston Villa' },
  { slug: 'bournemouth', name: 'Bournemouth' },
  { slug: 'brentford', name: 'Brentford' },
  { slug: 'brighton-and-hove-albion', name: 'Brighton & Hove Albion' },
  { slug: 'burnley', name: 'Burnley' },
  { slug: 'chelsea', name: 'Chelsea' },
  { slug: 'crystal-palace', name: 'Crystal Palace' },
  { slug: 'everton', name: 'Everton' },
  { slug: 'fulham', name: 'Fulham' },
  { slug: 'leeds', name: 'Leeds United' },
  { slug: 'liverpool', name: 'Liverpool' },
  { slug: 'manchester-city', name: 'Manchester City' },
  { slug: 'manchester-united', name: 'Manchester United' },
  { slug: 'newcastle', name: 'Newcastle United' },
  { slug: 'nottingham-forest', name: 'Nottingham Forest' },
  { slug: 'sunderland', name: 'Sunderland' },
  { slug: 'tottenham', name: 'Tottenham Hotspur' },
  { slug: 'west-ham', name: 'West Ham United' },
  { slug: 'wolverhampton-wanderers', name: 'Wolverhampton Wanderers' }
]

export function pointsLostTeamBySlug(slug: string): PointsLostTeam | undefined {
  return POINTS_LOST_TEAMS.find(t => t.slug === slug)
}
