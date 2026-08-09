export interface TeamPage {
  slug: string
  abbr: string
  name: string
}

export const teamPages: TeamPage[] = [
  { slug: 'arsenal', abbr: 'ARS', name: 'Arsenal' },
  { slug: 'manchester-united', abbr: 'MUN', name: 'Manchester United' },
  { slug: 'liverpool', abbr: 'LIV', name: 'Liverpool' },
  { slug: 'tottenham', abbr: 'TOT', name: 'Tottenham Hotspur' },
  { slug: 'west-ham', abbr: 'WHU', name: 'West Ham United' },
  { slug: 'manchester-city', abbr: 'MCI', name: 'Manchester City' },
  { slug: 'newcastle', abbr: 'NEW', name: 'Newcastle United' },
  { slug: 'sunderland', abbr: 'SUN', name: 'Sunderland' },
  { slug: 'leeds', abbr: 'LEE', name: 'Leeds United' },
  { slug: 'aston-villa', abbr: 'AVL', name: 'Aston Villa' },
  { slug: 'brentford', abbr: 'BRE', name: 'Brentford' },
  { slug: 'chelsea', abbr: 'CHE', name: 'Chelsea' }
]

export function teamBySlug(slug: string): TeamPage | undefined {
  return teamPages.find(t => t.slug === slug)
}
