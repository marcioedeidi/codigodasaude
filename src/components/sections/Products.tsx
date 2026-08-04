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
      image: 'https://www.minhavitrine.pro/products/bd58588d-e977-48b5-b5c8-609cb082e15a.png',
    },
    {
      id: 2,
      title: 'Velmo Drink',
      description: 'Produto em destaque no Código da Saúde, com e-book de apoio como brinde.',
      badge: 'Inclui e-book',
      image: 'https://www.minhavitrine.pro/products/4a1b6bbe-00b6-417d-9471-43187c321d9d.png',
    },
    {
      id: 3,
      title: 'Termo Drink',
      description: 'Uma alternativa da linha para quem procura praticidade no dia a dia.',
      badge: 'Saiba mais',
      image: 'https://www.minhavitrine.pro/products/0ec9d4f4-6ae5-4a48-a700-a8ad867d0eda.png',
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
                <div className="mb-5 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/55 p-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
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
