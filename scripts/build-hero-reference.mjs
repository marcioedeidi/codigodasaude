import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const parts = []
const expectedParts = [
  [18000, '93fe1e744f19c41b2da0dbb3505e24511864eb9b7461e58f771fea4992f23cf5'],
  [18000, '08d26685b95cbb3c19557e8249f7f414208c4bdbaca62599b62170420ffed797'],
  [18000, 'd054ae79f9b732059ddbd760907053571171edaad001ca21b6d03c12a034fa09'],
  [18000, '69c5b352660722f51faba60497f387b756d55cc9b87aefec0fde4c9932e59c6a'],
  [18000, '18c7765d8effe13541ea3b04f442271a5bd06240bfb92a76f4ad2e342697ce50'],
  [15420, '9eac2df4fbd86e58052ca158fc7a7650f13552e68e4b5d56a970255c587a3bf8'],
]

for (let i = 1; i <= 6; i += 1) {
  const file = path.join(root, 'src', 'assets', `heroRef${i}.ts`)
  const source = fs.readFileSync(file, 'utf8')
  const match = source.match(/export default '([^']*)'/s)
  if (!match) throw new Error(`Não foi possível ler heroRef${i}.ts`)
  const part = match[1]
  const partHash = crypto.createHash('sha256').update(part).digest('hex')
  const [expectedLength, expectedPartHash] = expectedParts[i - 1]
  console.log(`Parte ${i}: ${part.length}/${expectedLength} chars | ${partHash} | ${partHash === expectedPartHash ? 'OK' : 'DIFERENTE'}`)
  parts.push(part)
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
