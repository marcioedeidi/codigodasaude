const BotanicalLeaves = () => {
  const leavesStrip = `${import.meta.env.BASE_URL}assets/leaves-strip.webp`

  return (
    <div
      aria-hidden="true"
      className="botanical-leaves pointer-events-none absolute inset-0 overflow-hidden"
    >
      <img
        src={leavesStrip}
        alt=""
        className="absolute -left-1 top-0 h-full w-[92px] object-fill opacity-95 md:w-[118px]"
      />
      <img
        src={leavesStrip}
        alt=""
        className="absolute -right-1 top-0 h-full w-[92px] -scale-x-100 object-fill opacity-95 md:w-[118px]"
      />
    </div>
  )
}

export default BotanicalLeaves
