export const MANAGER_SLUGS: Record<string, string> = {
  'Arsène Wenger': 'wenger',
  'Alex Ferguson': 'ferguson',
  'David Moyes': 'moyes',
  'Pep Guardiola': 'guardiola',
  'Harry Redknapp': 'redknapp',
  'José Mourinho': 'mourinho',
  'Jürgen Klopp': 'klopp',
  'Sam Allardyce': 'allardyce',
  'Rafael Benítez': 'benitez',
  'Mark Hughes': 'hughes',
  'Mauricio Pochettino': 'pochettino',
  'Mikel Arteta': 'arteta',
  'Eddie Howe': 'howe',
  'Brendan Rodgers': 'rodgers',
  'Roy Hodgson': 'hodgson',
  'Steve Bruce': 'bruce',
  "Martin O'Neill": 'o-neill',
  'Kevin Keegan': 'keegan',
  'Kenny Dalglish': 'dalglish',
  "David O'Leary": 'o-leary'
}

export interface ManagerPage {
  slug: string
  name: string
}

export const MANAGER_PAGES: ManagerPage[] = Object.entries(MANAGER_SLUGS)
  .map(([name, slug]) => ({ name, slug }))
  .sort((a, b) => a.name.localeCompare(b.name))

export function managerBySlug(slug: string): ManagerPage | undefined {
  return MANAGER_PAGES.find(m => m.slug === slug)
}

export function managerSlug(name: string): string | undefined {
  return MANAGER_SLUGS[name]
}
