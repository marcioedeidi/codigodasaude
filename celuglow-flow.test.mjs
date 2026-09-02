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
assert.match(celuglow, /Comprar 1 unidade Celuglow — R\$ 209,90/)
assert.match(celuglow, /Comprar Combo Celuglow 3 \+ 3 — R\$ 461,50/)
assert.match(celuglow, /Comprar Combo Celuglow 12 unidades — R\$ 851,00/)
assert.equal((celuglow.match(/label: '/g) ?? []).length, 3)
assert.match(celuglow, /single: null/)
assert.match(celuglow, /combo: null/)
assert.match(celuglow, /twelve: null/)
assert.doesNotMatch(celuglow, /https:\/\/pay\.hest\.com\.br\//)

console.log('Celuglow flow requirements passed')
