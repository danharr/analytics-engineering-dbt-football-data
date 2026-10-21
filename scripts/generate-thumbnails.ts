import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { thumbnails } from './thumbnails-source'

const out = fileURLToPath(new URL('../assets/data/thumbnails.json', import.meta.url))

writeFileSync(out, JSON.stringify(thumbnails, null, 2) + '\n')

console.log(`Wrote ${thumbnails.length} thumbnails to ${out}`)
