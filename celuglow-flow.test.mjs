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
assert.doesNotMatch(celuglow, /Comprar 1 unidade Celuglow/)
assert.doesNotMatch(celuglow, /Comprar Combo Celuglow/)
assert.doesNotMatch(celuglow, /Mais escolhido/)
assert.doesNotMatch(celuglow, /CeluGlow Creme Anticelulite 200g/)
assert.doesNotMatch(celuglow, /Voltar para produtos/)

console.log('Celuglow simplified page requirements passed')
