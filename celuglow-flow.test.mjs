import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const produtos = await readFile('src/pages/Produtos.tsx', 'utf8')
const routes = await readFile('src/routes/AppRoutes.tsx', 'utf8')
let celuglow = ''
try {
  celuglow = await readFile('src/pages/Celuglow.tsx', 'utf8')
} catch {
  // The failing test should identify that the new page is still missing.
}

assert.doesNotMatch(produtos, /const priceAreas/)
assert.match(produtos, /name: 'Celuglow'/)
assert.match(produtos, /Celuglow.*navigate\('\/produtos\/celuglow'\)/s)

assert.match(routes, /import Celuglow from '..\/pages\/Celuglow'/)
assert.match(routes, /path="\/produtos\/celuglow" element={<Celuglow \/>}/)

assert.match(celuglow, /celuglow-corrigido\.png/)
assert.doesNotMatch(celuglow, /ChatGPT Image 31 de ago\. de 2026, 22_57_45\.png/)
assert.doesNotMatch(celuglow, /image-description/)
assert.doesNotMatch(celuglow, /Mais escolhido/)
assert.doesNotMatch(celuglow, /CeluGlow Creme Anticelulite 200g/)
assert.doesNotMatch(celuglow, /Voltar para produtos/)

assert.match(celuglow, /https:\/\/pay\.hest\.com\.br\/69a2442e-55e8-4afd-8d02-99294059497c/)
assert.match(celuglow, /https:\/\/pay\.hest\.com\.br\/51518625-b842-47e3-9ae9-9b8409cb7c10/)
assert.match(celuglow, /https:\/\/pay\.hest\.com\.br\/982266d1-2c76-4735-8fbf-a980c02d56e6/)
assert.equal((celuglow.match(/target="_blank"/g) ?? []).length, 3)
assert.equal((celuglow.match(/aria-label="Comprar/g) ?? []).length, 3)
assert.match(celuglow, /absolute inset-0/)

console.log('Celuglow clickable checkout areas requirements passed')
