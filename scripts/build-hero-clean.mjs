import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const sourcePath = path.join(root, 'src', 'assets', 'heroClean', 'hero.b64')
const outDir = path.join(root, 'public', 'assets')
const outPath = path.join(outDir, 'hero-oficial.jpg')

const base64 = fs.readFileSync(sourcePath, 'utf8').trim()
const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedHash = '3b952ec0e18ae38d0b7c5bb5db0cb1fec43043c0981a5b293b745480345543d5'
const expectedBytes = 112222

if (buffer.length !== expectedBytes || hash !== expectedHash || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
  throw new Error(`Hero limpa inválida: ${buffer.length} bytes / ${hash}`)
}

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(outPath, buffer)
console.log(`Hero limpa gerada: hero-oficial.jpg (${buffer.length} bytes, sha256 ${hash})`)
