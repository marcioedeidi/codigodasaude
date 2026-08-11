import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const outputDir = path.join(root, 'public', 'assets')

const assets = [
  ['src/assets/logoSmall.ts', 'logo-small.webp'],
  ['src/assets/logoBig.ts', 'logo-big.webp'],
  ['src/assets/leavesStrip.ts', 'leaves-strip.webp'],
]

const chunkedAssets = [
  {
    dir: 'scripts/fiberslim-v1',
    parts: 7,
    target: 'fiberslim-page-v1.webp',
  },
]

await mkdir(outputDir, { recursive: true })

for (const [source, target] of assets) {
  const sourcePath = path.join(root, source)
  const text = await readFile(sourcePath, 'utf8')
  const match = text.match(/base64,([^']+)/s)

  if (!match) {
    throw new Error(`Base64 não encontrado em ${source}`)
  }

  const buffer = Buffer.from(match[1], 'base64')
  await writeFile(path.join(outputDir, target), buffer)
  console.log(`Gerado: ${target} (${buffer.length} bytes)`)
}

for (const asset of chunkedAssets) {
  const chunks = []

  for (let i = 1; i <= asset.parts; i += 1) {
    const file = `part${String(i).padStart(2, '0')}.b64`
    chunks.push(await readFile(path.join(root, asset.dir, file), 'utf8'))
  }

  const base64 = chunks.join('').replace(/\s+/g, '')
  const buffer = Buffer.from(base64, 'base64')
  await writeFile(path.join(outputDir, asset.target), buffer)
  console.log(`Gerado: ${asset.target} (${buffer.length} bytes)`)
}
