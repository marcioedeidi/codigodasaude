import imagemTerceiraDobra from '../../assets/Banner de Produtos para Bem-Estar na Praia.png'

/**
 * Terceira dobra: a arte aprovada apresenta os três produtos em uma única imagem.
 * Como os cartões são informativos, não há botões nem links nessa seção.
 * Mantemos uma descrição acessível sem duplicar texto na tela.
 */
const Products = () => (
  <section id="produtos" aria-label="Produtos em destaque do Código da Saúde" className="relative w-full overflow-hidden">
    <div className="sr-only">
      <h2>Produtos em destaque</h2>
      <ul>
        <li>Livro Eu Sou Terapeuta e Também Tenho Medo — lançamento.</li>
        <li>Velmo Black Drink — com e-book de brinde.</li>
        <li>AlwaysFit FITS36 — 60 cápsulas, selo Mais Vendidos.</li>
      </ul>
    </div>
    <img
      src={imagemTerceiraDobra}
      alt=""
      loading="lazy"
      decoding="async"
      className="block h-auto w-full select-none"
      draggable={false}
    />
  </section>
)

export default Products
