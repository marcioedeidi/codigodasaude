const LeafBranch = ({ side }: { side: 'left' | 'right' }) => {
  const mirror = side === 'right' ? 'scale(-1 1) translate(-120 0)' : undefined

  return (
    <svg
      viewBox="0 0 120 720"
      preserveAspectRatio="none"
      className={`absolute top-0 h-full w-[110px] opacity-55 md:w-[145px] ${side === 'left' ? '-left-4' : '-right-4'}`}
    >
      <g transform={mirror}>
        <path d="M18 720 C35 610, 38 510, 27 410 C20 330, 35 225, 75 105 C84 78, 96 44, 106 0" fill="none" stroke="#5E9D61" strokeWidth="3.4" strokeLinecap="round" opacity="0.7" />
        <path d="M34 610 C54 573, 72 548, 96 530" fill="none" stroke="#71A96B" strokeWidth="2.2" opacity="0.65" />
        <path d="M31 500 C53 466, 70 443, 103 426" fill="none" stroke="#71A96B" strokeWidth="2.2" opacity="0.65" />
        <path d="M29 386 C46 350, 64 321, 100 302" fill="none" stroke="#71A96B" strokeWidth="2.2" opacity="0.65" />
        <path d="M43 272 C61 235, 79 211, 108 198" fill="none" stroke="#71A96B" strokeWidth="2.2" opacity="0.65" />
        <path d="M70 162 C79 133, 89 111, 111 94" fill="none" stroke="#71A96B" strokeWidth="2.2" opacity="0.65" />

        <ellipse cx="42" cy="642" rx="18" ry="43" transform="rotate(-28 42 642)" fill="#8DBD70" opacity="0.55" />
        <ellipse cx="84" cy="558" rx="18" ry="44" transform="rotate(52 84 558)" fill="#72AA61" opacity="0.62" />
        <ellipse cx="46" cy="516" rx="17" ry="41" transform="rotate(-38 46 516)" fill="#A8CC7D" opacity="0.58" />
        <ellipse cx="91" cy="443" rx="18" ry="46" transform="rotate(55 91 443)" fill="#74B66C" opacity="0.64" />
        <ellipse cx="45" cy="397" rx="18" ry="45" transform="rotate(-37 45 397)" fill="#7FBF78" opacity="0.55" />
        <ellipse cx="87" cy="327" rx="18" ry="44" transform="rotate(58 87 327)" fill="#9BCB7B" opacity="0.6" />
        <ellipse cx="57" cy="282" rx="17" ry="42" transform="rotate(-28 57 282)" fill="#78B66E" opacity="0.58" />
        <ellipse cx="99" cy="216" rx="16" ry="40" transform="rotate(62 99 216)" fill="#98C977" opacity="0.58" />
        <ellipse cx="82" cy="158" rx="15" ry="38" transform="rotate(-22 82 158)" fill="#80B969" opacity="0.52" />
        <ellipse cx="106" cy="105" rx="14" ry="34" transform="rotate(55 106 105)" fill="#A7CC7C" opacity="0.58" />
        <ellipse cx="95" cy="54" rx="13" ry="32" transform="rotate(-28 95 54)" fill="#77AC63" opacity="0.5" />
      </g>
    </svg>
  )
}

const BotanicalLeaves = () => {
  const leavesStrip = `${import.meta.env.BASE_URL}assets/leaves-strip.webp`

  return (
    <div aria-hidden="true" className="botanical-leaves pointer-events-none absolute inset-0 overflow-hidden">
      <LeafBranch side="left" />
      <LeafBranch side="right" />

      <img
        src={leavesStrip}
        alt=""
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
        className="absolute -left-1 top-0 h-full w-[92px] object-fill opacity-90 md:w-[118px]"
      />
      <img
        src={leavesStrip}
        alt=""
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
        className="absolute -right-1 top-0 h-full w-[92px] -scale-x-100 object-fill opacity-90 md:w-[118px]"
      />
    </div>
  )
}

export default BotanicalLeaves
