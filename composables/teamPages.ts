import { allTime } from '~/composables/useData'
import { teamSlug } from '~/utils/teamSlugs'

export interface TeamPage {
  slug: string
  abbr: string
  name: string
}

export const teamPages: TeamPage[] = allTime
  .map(t => ({
    slug: teamSlug(t.team_name),
    abbr: t.team_abbr,
    name: t.team_name
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

export function teamBySlug(slug: string): TeamPage | undefined {
  return teamPages.find(t => t.slug === slug)
}
