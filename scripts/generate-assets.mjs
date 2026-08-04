import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const outputDir = path.join(root, 'public', 'assets')

const assets = [
  {
    sources: ['src/assets/logoSmall.ts'],
    target: 'logo-small.webp',
    mode: 'ts-data-uri',
  },
  {
    sources: [
      'src/assets/logoBig.part1.txt',
      'src/assets/logoBig.part2.txt',
      'src/assets/logoBig.part3.txt',
      'src/assets/logoBig.part4.txt',
    ],
    target: 'logo-big.webp',
    mode: 'raw-base64',
  },
  {
    sources: ['src/assets/leavesStrip.ts'],
    target: 'leaves-strip.webp',
    mode: 'ts-data-uri',
  },
]

await mkdir(outputDir, { recursive: true })

for (const asset of assets) {
  let base64 = ''

  if (asset.mode === 'raw-base64') {
    const parts = await Promise.all(
      asset.sources.map(async (source) => {
        const value = await readFile(path.join(root, source), 'utf8')
        return value.replace(/\s+/g, '')
      }),
    )
    base64 = parts.join('')
  } else {
    const text = await readFile(path.join(root, asset.sources[0]), 'utf8')
    const quotedPieces = [...text.matchAll(/'([^']*)'/g)].map((match) => match[1])
    const joined = quotedPieces.join('')
    const marker = 'base64,'
    const markerIndex = joined.indexOf(marker)

    if (markerIndex === -1) {
      throw new Error(`Base64 não encontrado em ${asset.sources[0]}`)
    }

    base64 = joined.slice(markerIndex + marker.length)
  }

  const buffer = Buffer.from(base64, 'base64')
  await writeFile(path.join(outputDir, asset.target), buffer)
  console.log(`Gerado: ${asset.target} (${buffer.length} bytes)`)
}
