import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const dir = path.join(root, 'src', 'assets', 'heroFinalClean')
const files = fs.readdirSync(dir)
  .filter((name) => /^part\d+\.b64$/.test(name))
  .sort()

if (files.length !== 5) {
  throw new Error(`Hero final limpa inválida: esperado 5 partes, encontrado ${files.length}`)
}

const base64 = files
  .map((name) => fs.readFileSync(path.join(dir, name), 'utf8').trim())
  .join('')

const expectedBase64Length = 169184
if (base64.length !== expectedBase64Length) {
  throw new Error(`Hero final limpa inválida: b64=${base64.length}, esperado=${expectedBase64Length}`)
}

const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedBytes = 126886
const expectedHash = 'ca62963e93d4542146a2bd0fa8aacf1d271d5a7975cecd5f7a44fba69426275f'

const isWebP =
  buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
  buffer.subarray(8, 12).toString('ascii') === 'WEBP'

if (buffer.length !== expectedBytes || hash !== expectedHash || !isWebP) {
  throw new Error(`Hero final limpa inválida: bytes=${buffer.length}, sha=${hash}, webp=${isWebP}`)
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'hero-final-clean.webp')
fs.writeFileSync(outPath, buffer)

console.log(`Hero FINAL LIMPA gerada: ${buffer.length} bytes / sha256 ${hash}`)
