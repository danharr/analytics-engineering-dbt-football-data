import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { teamBySlug } from '~/composables/teamPages'
import { managerBySlug } from '~/utils/managerPages'
import { navItems } from '~/composables/navItems'

export interface Crumb {
  label: string
  to?: string
}

const pageLabels: Record<string, string> = {}
for (const item of navItems) {
  if ('path' in item && item.path) {
    pageLabels[item.path] = item.label
  }
}

export function useBreadcrumbs() {
  const route = useRoute()

  return computed<Crumb[]>(() => {
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
      const crumbs = [
        { label: 'Home', to: '/' },
        { label: 'Teams', to: '/teams' },
        parts.length >= 3
          ? { label: team?.name ?? slug, to: `/teams/${slug}` }
          : { label: team?.name ?? slug }
      ]
      if (parts.length >= 3) {
        crumbs.push({ label: parts[2] })
      }
      return crumbs
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

    const label = pageLabels['/' + group]
    return label ? [{ label: 'Home', to: '/' }, { label }] : [{ label: 'Home', to: '/' }]
  })
}
