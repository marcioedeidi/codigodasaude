import leavesRight from '../../assets/leavesRight'

const BotanicalLeaves = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <img
        src={leavesRight}
        alt=""
        className="absolute -left-8 top-0 h-full max-h-[720px] w-auto -scale-x-100 object-contain opacity-70 md:-left-3"
      />
      <img
        src={leavesRight}
        alt=""
        className="absolute -right-8 top-0 h-full max-h-[720px] w-auto object-contain opacity-70 md:-right-3"
      />
    </div>
  )
}

export default BotanicalLeaves
