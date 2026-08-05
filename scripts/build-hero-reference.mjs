import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()

const expectedParts = [
  [18000, '93fe1e744f19c41b2da0dbb3505e24511864eb9b7461e58f771fea4992f23cf5'],
  [18000, '08d26685b95cbb3c19557e8249f7f414208c4bdbaca62599b62170420ffed797'],
  [18000, 'd054ae79f9b732059ddbd760907053571171edaad001ca21b6d03c12a034fa09'],
  [18000, '69c5b352660722f51faba60497f387b756d55cc9b87aefec0fde4c9932e59c6a'],
  [18000, '18c7765d8effe13541ea3b04f442271a5bd06240bfb92a76f4ad2e342697ce50'],
  [15420, '9eac2df4fbd86e58052ca158fc7a7650f13552e68e4b5d56a970255c587a3bf8'],
]

const expectedSub4 = {
  a: [3000, '41ff1894c44ad523aab8e010ddeda656106597dec61237686694609dda6a5925'],
  b: [3000, 'a3c0fe8a17380d3e755e4722e0262fd1f92d44bd1f03311c94573802042d6c9c'],
  c: [3000, '59c8ea90588233635496e2e2c305972459c6cb22c0623a6b7bfafa7de2d52600'],
  d: [3000, '55d1bdf73c719e50935841aa82ac9dee7a7ba1ae102beb78ca883994ca57773a'],
  e: [3000, 'd13b0bfc11b3276b26e5843c59c27efbca587922e6211bdacbfe93aaa731502d'],
  f: [3000, '3fd0ba05b231aad11d26e614eb75c01ae8a8bee59e4a4d083b2331fb97b8dd59'],
}

const readPart = (name) => {
  const source = fs.readFileSync(path.join(root, 'src', 'assets', `${name}.ts`), 'utf8')
  const match = source.match(/export default '([^']*)'/s)
  if (!match) throw new Error(`Não foi possível ler ${name}.ts`)
  return match[1]
}

const sub4Values = []
for (const suffix of ['a', 'b', 'c', 'd', 'e', 'f']) {
  const value = readPart(`heroRef4${suffix}`)
  const hash = crypto.createHash('sha256').update(value).digest('hex')
  const [expectedLength, expectedHash] = expectedSub4[suffix]
  const ok = value.length === expectedLength && hash === expectedHash
  console.log(`Parte 4${suffix}: ${value.length}/${expectedLength} chars | ${hash} | ${ok ? 'OK' : 'DIFERENTE'}`)
  sub4Values.push(value)
}

const parts = [
  readPart('heroRef1'),
  readPart('heroRef2'),
  readPart('heroRef3'),
  sub4Values.join(''),
  readPart('heroRef5'),
  readPart('heroRef6'),
]

for (let i = 0; i < parts.length; i += 1) {
  const part = parts[i]
  const partHash = crypto.createHash('sha256').update(part).digest('hex')
  const [expectedLength, expectedPartHash] = expectedParts[i]
  console.log(`Parte ${i + 1}: ${part.length}/${expectedLength} chars | ${partHash} | ${partHash === expectedPartHash ? 'OK' : 'DIFERENTE'}`)
}

const base64 = parts.join('')
const buffer = Buffer.from(base64, 'base64')
const hash = crypto.createHash('sha256').update(buffer).digest('hex')
const expectedHash = '4187d3357305756757f2850bdbc8169b93c08a41c8260497628513667be8b061'
const expectedBytes = 79064

console.log(`Hero: ${base64.length} caracteres base64 / ${buffer.length} bytes / sha256 ${hash}`)

const allSub4Ok = ['a', 'b', 'c', 'd', 'e', 'f'].every((suffix, index) => {
  const value = sub4Values[index]
  const [expectedLength, expectedSubHash] = expectedSub4[suffix]
  const actualHash = crypto.createHash('sha256').update(value).digest('hex')
  return value.length === expectedLength && actualHash === expectedSubHash
})

const allPartsOk = parts.every((part, index) => {
  const [expectedLength, expectedPartHash] = expectedParts[index]
  const actualHash = crypto.createHash('sha256').update(part).digest('hex')
  return part.length === expectedLength && actualHash === expectedPartHash
})

if (!allSub4Ok || !allPartsOk || buffer.length !== expectedBytes || hash !== expectedHash) {
  throw new Error('Hero aprovada não confere; publicação bloqueada para evitar arte incorreta.')
}

const outDir = path.join(root, 'public', 'assets')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'hero-reference.webp'), buffer)
console.log('Hero aprovada gerada e validada em public/assets/hero-reference.webp')
