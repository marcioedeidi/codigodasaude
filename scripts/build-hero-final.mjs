import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const dir = path.join(root, 'src', 'assets', 'heroCleanFinal')
const files = fs.readdirSync(dir)
  .filter((name) => /^part\d+\.b64$/.test(name))
  .sort()

if (files.length !== 9) {
  throw new Error(`Hero final inválida: esperado 9 partes, encontrado ${files.length}`)
}

const base64 = files
  .map((name) => fs.readFileSync(path.join(dir, name), 'utf8').trim())
  .join('')

const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedBase64Length = 179752
const expectedBytes = 134814
const expectedHash = '98a0e43eac284aeeb56a1670272e3829c95dac546efe24cc2f4133e05fc74cf8'

if (
  base64.length !== expectedBase64Length ||
  buffer.length !== expectedBytes ||
  hash !== expectedHash ||
  buffer[0] !== 0xff ||
  buffer[1] !== 0xd8
) {
  throw new Error(`Hero final inválida: b64=${base64.length}, bytes=${buffer.length}, sha=${hash}`)
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'hero-oficial.jpg')
fs.writeFileSync(outPath, buffer)

console.log(`Hero final limpa gerada: ${buffer.length} bytes, sha256 ${hash}`)
