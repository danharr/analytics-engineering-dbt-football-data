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
  { slug: 'west-ham', abbr: 'WHU', name: 'West Ham United' }
]

export function teamBySlug(slug: string): TeamPage | undefined {
  return teamPages.find(t => t.slug === slug)
}
