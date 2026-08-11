export const SLUG_OVERRIDES: Record<string, string> = {
  'Tottenham Hotspur': 'tottenham',
  'West Ham United': 'west-ham',
  'Newcastle United': 'newcastle',
  'Leeds United': 'leeds'
}

export function teamSlug(teamName: string): string {
  if (SLUG_OVERRIDES[teamName]) {
    return SLUG_OVERRIDES[teamName]
  }
  return teamName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export interface TeamSlugRow {
  slug: string
  team_abbr: string
  team_name: string
}

export function teamSlugsFromCsv(csv: string): TeamSlugRow[] {
  const lines = csv.trim().split('\n')
  const header = lines[0].split(',')
  const idx = (name: string) => header.indexOf(name)
  return lines.slice(1).map(line => {
    const cols = line.split(',')
    const team_name = cols[idx('team_name')]
    return {
      slug: teamSlug(team_name),
      team_abbr: cols[idx('team_abbr')],
      team_name
    }
  })
}
