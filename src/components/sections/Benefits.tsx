import imagemSegundaDobra from '../../assets/segunda-dobra-completa.webp'

/**
 * A segunda dobra é uma única arte, conforme solicitado.
 * Os quatro cartões são informativos e não contêm links.
 * O conteúdo equivalente permanece acessível a leitores de tela.
 */
const Benefits = () => (
  <section id="beneficios" aria-labelledby="beneficios-titulo" className="relative w-full overflow-hidden">
    <div className="sr-only">
      <h2 id="beneficios-titulo">Por Que Escolher o Código da Saúde?</h2>
      <p>Informação, acolhimento e escolhas mais simples para cuidar do seu bem-estar com clareza.</p>
      <ul>
        <li>Seleção Cuidadosa — Escolhas organizadas para facilitar sua busca por opções de saúde e bem-estar.</li>
        <li>Informação Clara — Conteúdo simples e transparente para ajudar você a entender melhor cada opção.</li>
        <li>Atendimento Humano — Orientação próxima, sem pressão, respeitando suas dúvidas e suas escolhas.</li>
        <li>Rotina Mais Simples — Uma experiência prática para organizar seus próximos passos de bem-estar.</li>
      </ul>
    </div>
    <img
      src={imagemSegundaDobra}
      alt=""
      width={1727}
      height={910}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full select-none"
      draggable={false}
    />
  </section>
)

export default Benefits
