import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const owner = 'marcioedeidi'
const repo = 'codigodasaude'
const blobSha = '1d6ad66ed621ae060f6f9cc0eb68207cf0059be2'
const expectedBytes = 134456
const expectedHash = 'a0c35c9414e2db1df4de8c048f2e06f997136423acf59428ffa2dde73bed71b8'

const url = `https://api.github.com/repos/${owner}/${repo}/git/blobs/${blobSha}`
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'codigo-da-saude-build',
}

if (process.env.GH_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GH_TOKEN}`
}

const response = await fetch(url, { headers })
if (!response.ok) {
  throw new Error(`Falha ao baixar a arte da página de produtos: HTTP ${response.status}`)
}

const payload = await response.json()
const base64 = String(payload.content || '').replace(/\s+/g, '')
const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const isWebP =
  buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
  buffer.subarray(8, 12).toString('ascii') === 'WEBP'

if (buffer.length !== expectedBytes || hash !== expectedHash || !isWebP) {
  throw new Error(`Arte de produtos inválida: bytes=${buffer.length}, sha=${hash}, webp=${isWebP}`)
}

const outDir = path.join(process.cwd(), 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'produtos-page-v1.webp')
fs.writeFileSync(outPath, buffer)

console.log(`Página de produtos gerada: ${buffer.length} bytes / sha256 ${hash}`)
