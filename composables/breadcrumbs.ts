import { useRoute } from 'vue-router'
import { teamBySlug } from '~/composables/teamPages'
import { managerBySlug } from '~/utils/managerPages'

export interface Crumb {
  label: string
  to?: string
}

export function useBreadcrumbs(): Crumb[] {
  const route = useRoute()
  const parts = route.path.split('/').filter(Boolean)

  if (parts.length === 0) {
    return [{ label: 'Home', to: '/' }]
  }

  const group = parts[0]
  const slug = parts[1]
  const hubs: Record<string, string> = { teams: 'Teams', managers: 'Managers', seasons: 'Seasons' }

  if (parts.length === 1 && hubs[group]) {
    return [{ label: 'Home', to: '/' }, { label: hubs[group] }]
  }

  if (group === 'teams') {
    const team = teamBySlug(slug)
    return [
      { label: 'Home', to: '/' },
      { label: 'Teams', to: '/teams' },
      { label: team?.name ?? slug }
    ]
  }

  if (group === 'managers') {
    const manager = managerBySlug(slug)
    return [
      { label: 'Home', to: '/' },
      { label: 'Managers', to: '/managers' },
      { label: manager?.name ?? slug }
    ]
  }

  if (group === 'seasons') {
    return [
      { label: 'Home', to: '/' },
      { label: 'Seasons', to: '/seasons' },
      { label: slug }
    ]
  }

  return [{ label: 'Home', to: '/' }]
}
