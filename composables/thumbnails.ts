import data from '~/assets/data/thumbnails.json'
import type { Thumbnail } from '~/utils/thumbnailTypes'

// Precomputed by `npm run generate:thumbnails` so the homepage does not need
// to import every chart dataset just to draw the preview thumbnails.
export const thumbnails = data as unknown as Thumbnail[]
