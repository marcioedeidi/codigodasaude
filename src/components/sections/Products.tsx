import { motion } from 'framer-motion'
import Card from '@components/common/Card'

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Produto Premium',
      description: 'Fórmula exclusiva com ingredientes selecionados para máxima eficácia.',
      price: 'Sob demanda',
    },
    {
      id: 2,
      title: 'Produto Essencial',
      description: 'O essencial para sua saúde com qualidade garantida.',
      price: 'Sob demanda',
    },
    {
      id: 3,
      title: 'Produto Completo',
      description: 'Solução completa para uma saúde integral e equilibrada.',
      price: 'Sob demanda',
    },
  ]

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha de produtos desenvolvidos especialmente para você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">💚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-accent-400 font-bold text-lg">
                  {product.price}
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
