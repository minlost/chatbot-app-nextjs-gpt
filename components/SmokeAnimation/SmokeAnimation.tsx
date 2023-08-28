const SmokeAnimation = () => {
  return (
    <>
      <img
        src="/img/smoke.png"
        alt=""
        className="absolute w-full  bottom-0 left-10 -z-10 animate-smoke1 delay-[0.5s]"
      />
      <img
        src="/img/smoke.png"
        alt=""
        className="absolute w-full  bottom-0 left-10 -z-10 animate-smoke2 delay-[1.5s]"
      />
      <img
        src="/img/smoke.png"
        alt=""
        className="absolute w-full  bottom-0 left-10 -z-10 animate-smoke3 delay-[2.5s]"
      />
    </>
  )
}

export default SmokeAnimation
