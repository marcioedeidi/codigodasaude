const BotanicalLeaves = () => {
  const Leaf = ({ className }: { className: string }) => (
    <span
      className={`absolute block h-16 w-8 rounded-[100%_0_100%_0] bg-[#77A95F]/35 ${className}`}
    />
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -left-3 top-8 h-72 w-32 opacity-90">
        <span className="absolute left-8 top-0 h-72 w-px -rotate-12 bg-[#77A95F]/30" />
        <Leaf className="left-2 top-6 -rotate-[28deg]" />
        <Leaf className="left-12 top-16 rotate-[34deg]" />
        <Leaf className="left-0 top-28 -rotate-[36deg]" />
        <Leaf className="left-14 top-40 rotate-[30deg]" />
        <Leaf className="left-4 top-52 -rotate-[24deg]" />
      </div>

      <div className="absolute -right-3 bottom-5 h-72 w-32 rotate-180 opacity-90">
        <span className="absolute left-8 top-0 h-72 w-px -rotate-12 bg-[#77A95F]/30" />
        <Leaf className="left-2 top-6 -rotate-[28deg]" />
        <Leaf className="left-12 top-16 rotate-[34deg]" />
        <Leaf className="left-0 top-28 -rotate-[36deg]" />
        <Leaf className="left-14 top-40 rotate-[30deg]" />
        <Leaf className="left-4 top-52 -rotate-[24deg]" />
      </div>

      <div className="absolute right-[18%] top-8 hidden h-28 w-20 opacity-40 md:block">
        <Leaf className="left-0 top-0 rotate-[18deg] scale-75" />
        <Leaf className="left-9 top-8 -rotate-[26deg] scale-75" />
      </div>
    </div>
  )
}

export default BotanicalLeaves
