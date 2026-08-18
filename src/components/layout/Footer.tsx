import footerImage from '../../assets/footer/rodape.png'

const Footer = () => {
  const items = [
    { icon: '◇', title: 'Compra Segura', text: 'Seus dados e pagamentos protegidos.' },
    { icon: '▤', title: 'Entrega para todo o Brasil', text: 'Informações de envio e rastreio no atendimento.' },
    { icon: '♡', title: 'Atendimento Humano', text: 'Suporte para dúvidas antes e depois da compra.' },
    { icon: '▣', title: 'Ambiente Seguro', text: 'Navegação protegida e dados tratados com cuidado.' },
  ]

  return (
    <footer className="bg-[#f2ead6] px-4 pb-6 pt-4">
      <div className="w-full overflow-hidden">
        <img
          src={footerImage}
          alt="Código da Saúde — rodapé"
          className="block h-auto w-full max-w-none object-cover"
          style={{ clipPath: 'inset(14% 0 9% 0)' }}
          draggable={false}
        />
      </div>
      <div className="container-max overflow-hidden rounded-[2rem] bg-[#0b8e88] text-white shadow-xl shadow-[#0b615d]/10">
        <div className="grid divide-y divide-white/25 md:grid-cols-4 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 px-5 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/45 text-2xl">
                {item.icon}
              </div>
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 text-sm leading-5 text-white/85">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-[#527069]">
        © {new Date().getFullYear()} Código da Saúde. Conteúdo informativo; não substitui avaliação profissional de saúde.
      </p>
    </footer>
  )
}

export default Footer
