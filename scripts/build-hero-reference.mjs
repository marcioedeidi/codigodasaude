import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()

const readPart = (name) => {
  const source = fs.readFileSync(path.join(root, 'src', 'assets', `${name}.ts`), 'utf8')
  const match = source.match(/export default '([^']*)'/s)
  if (!match) throw new Error(`Não foi possível ler ${name}.ts`)
  return match[1]
}

const sub4Values = ['a', 'b', 'c', 'd', 'e', 'f'].map((suffix) => readPart(`heroRef4${suffix}`))

const parts = [
  readPart('heroRef1'),
  readPart('heroRef2'),
  readPart('heroRef3'),
  sub4Values.join(''),
  readPart('heroRef5'),
  readPart('heroRef6'),
]

const base64 = parts.join('')
const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')

if (buffer.length < 50000 || buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
  throw new Error('O arquivo montado da hero não é um WEBP válido.')
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'hero-reference.webp'), buffer)

console.log(`Hero única gerada: ${buffer.length} bytes | sha256 ${hash}`)
console.log('Arquivo salvo em public/assets/hero-reference.webp')
