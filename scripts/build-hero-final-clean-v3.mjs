import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const dir = path.join(root, 'src', 'assets', 'heroFinalCleanV3')
const files = Array.from({ length: 11 }, (_, i) => `part${String(i + 1).padStart(2, '0')}.b64`)

const base64 = files.map(name => fs.readFileSync(path.join(dir, name), 'utf8').trim()).join('')
if (base64.length !== 169184) {
  throw new Error(`Hero V3 inválida: b64=${base64.length}, esperado=169184`)
}

const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedHash = 'ca62963e93d4542146a2bd0fa8aacf1d271d5a7975cecd5f7a44fba69426275f'
const isWebP =
  buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
  buffer.subarray(8, 12).toString('ascii') === 'WEBP'

if (buffer.length !== 126886 || hash !== expectedHash || !isWebP) {
  throw new Error(`Hero V3 inválida: bytes=${buffer.length}, sha=${hash}, webp=${isWebP}`)
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'hero-final-clean-v3.webp')
fs.writeFileSync(outPath, buffer)

console.log(`Hero V3 LIMPA gerada: ${buffer.length} bytes / sha256 ${hash}`)
