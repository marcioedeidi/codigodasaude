import leavesStrip from '../../assets/leavesStrip'

const BotanicalLeaves = () => {
  return (
    <div
      aria-hidden="true"
      className="botanical-leaves pointer-events-none absolute inset-0 overflow-hidden"
    >
      <img
        src={leavesStrip}
        alt=""
        className="absolute -left-1 top-0 h-full w-[72px] object-fill opacity-90 md:w-[92px]"
      />
      <img
        src={leavesStrip}
        alt=""
        className="absolute -right-1 top-0 h-full w-[72px] -scale-x-100 object-fill opacity-90 md:w-[92px]"
      />
    </div>
  )
}

export default BotanicalLeaves
