export interface BarRow {
  label: string
  value: number
  display: string
}

export type ThumbnailPreview =
  | { kind: 'bars'; rows: BarRow[] }
  | { kind: 'groupedBars'; rows: { label: string; a: number; b: number }[] }
  | { kind: 'lines'; series: { name: string; points: (number | null)[] }[]; xLabels: string[] }
  | { kind: 'squares'; rows: { label: string; cells: string[] }[] }
  | { kind: 'gantt'; rows: { label: string; bars: { start: number; end: number }[] }[] }
  | { kind: 'pyramid'; rows: { label: string; left: number; right: number }[] }
  | { kind: 'dots'; rows: { label: string; minutes: number[] }[] }
  | { kind: 'season'; label: string }

export interface Thumbnail {
  label: string
  path: string
  caption: string
  preview: ThumbnailPreview
}
