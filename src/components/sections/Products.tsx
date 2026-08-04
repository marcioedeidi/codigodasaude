import { motion } from 'framer-motion'
import Card from '@components/common/Card'
import BotanicalLeaves from '@components/common/BotanicalLeaves'

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Fiber Slim',
      description: 'Uma das opções da linha Velmora para quem busca organizar melhor sua rotina de bem-estar.',
      badge: 'Conheça a opção',
    },
    {
      id: 2,
      title: 'Velmo Drink',
      description: 'Produto em destaque no Código da Saúde, com e-book de apoio como brinde.',
      badge: 'Inclui e-book',
    },
    {
      id: 3,
      title: 'Termo Drink',
      description: 'Uma alternativa da linha para quem procura praticidade no dia a dia.',
      badge: 'Saiba mais',
    },
  ]

  return (
    <section id="produtos" className="section-padding relative overflow-hidden bg-[#F7F3EA]">
      <BotanicalLeaves />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#173F36] md:text-5xl">
            Nossos Produtos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#486B64]">
            Conheça algumas opções selecionadas para diferentes objetivos e rotinas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-2 border-white/95 bg-[#8FD8CE]">
                <div className="mb-5 flex aspect-square items-center justify-center rounded-2xl border border-white/80 bg-white/35">
                  <div className="text-center">
                    <div className="mb-3 text-5xl">🌿</div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#315D55]">
                      Imagem oficial em breve
                    </span>
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#173F36]">
                  {product.title}
                </h3>
                <p className="mb-5 leading-7 text-[#315D55]">{product.description}</p>
                <div className="inline-flex rounded-full border border-white/90 bg-white/55 px-4 py-2 text-sm font-bold text-[#146D68]">
                  {product.badge}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Products
