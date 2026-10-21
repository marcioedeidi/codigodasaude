import imagemSegundaDobra from '../../assets/Por Que Escolher o Código da Saúde_.png'

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
    {/* Recorte panorâmico apenas em telas maiores: imagem original preservada e sem distorção.
        Área visível da arte original: x=0..1727, y≈165..724.
        Em celulares, mostrar a arte inteira para não cortar os textos dos cartões. */}
    <div className="relative w-full overflow-hidden sm:aspect-[1727/559]">
      <img
        src={imagemSegundaDobra}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-auto w-full select-none sm:absolute sm:left-0 sm:top-[-29.5%] sm:max-w-none"
        draggable={false}
      />
    </div>
  </section>
)

export default Benefits
