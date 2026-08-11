import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const expectedBytes = 99568
const expectedHash = '60b970a57861ae19ef8aee9d57c3ae6e2a3f453084d4270189cf6a6bfffa6a17'
const partsDir = path.join(process.cwd(), 'scripts', 'produtos-v3')

const files = [
  'part01.b64',
  'part02.b64',
  'part03.b64',
  'part04.b64',
  'part05.b64',
  'part06.b64',
  'part07.b64',
  'part08.b64',
  'part09.b64',
  'part09b.b64',
  'part10.b64',
  'part10b.b64',
]

const base64 = files
  .map((file) => fs.readFileSync(path.join(partsDir, file), 'utf8').trim())
  .join('')

const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const isWebP =
  buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
  buffer.subarray(8, 12).toString('ascii') === 'WEBP'

if (buffer.length !== expectedBytes || hash !== expectedHash || !isWebP) {
  throw new Error(
    `Arte Produtos V3 inválida: bytes=${buffer.length}, sha=${hash}, webp=${isWebP}`,
  )
}

const outDir = path.join(process.cwd(), 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'produtos-page-v3.webp')
fs.writeFileSync(outPath, buffer)

console.log(`Produtos V3 gerada: ${buffer.length} bytes / sha256 ${hash}`)
