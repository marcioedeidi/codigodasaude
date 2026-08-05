import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const parts = []

for (let i = 1; i <= 6; i += 1) {
  const file = path.join(root, 'src', 'assets', `heroRef${i}.ts`)
  const source = fs.readFileSync(file, 'utf8')
  const match = source.match(/export default '([^']*)'/s)
  if (!match) throw new Error(`Não foi possível ler heroRef${i}.ts`)
  parts.push(match[1])
}

const base64 = parts.join('')
const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedHash = '4187d3357305756757f2850bdbc8169b93c08a41c8260497628513667be8b061'
const expectedBytes = 79064

console.log(`Hero: ${base64.length} caracteres base64 / ${buffer.length} bytes / sha256 ${hash}`)

if (buffer.length !== expectedBytes || hash !== expectedHash) {
  throw new Error(`Hero inválida. Esperado ${expectedBytes} bytes e sha256 ${expectedHash}.`)
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'hero-reference.webp'), buffer)
console.log('Hero aprovada gerada em public/assets/hero-reference.webp')
