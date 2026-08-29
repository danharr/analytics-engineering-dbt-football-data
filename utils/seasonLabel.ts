export function shortSeason(label: string): string {
  const [start, end] = label.split('-')
  if (!start || !end) return label
  return `${start.slice(2)}/${end}`
}
