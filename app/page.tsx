import SmokeAnimation from "@/components/SmokeAnimation/SmokeAnimation"
import { MagicBall } from "@/utils/svg/magicBall"
import { HelpCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex ">
        <div className="flex flex-col text-white items">
          <div className="flex gap-1">
            <h1 className="text-white font-semibold text-4xl md:text-6xl">
              Hádankomat
            </h1>
            <HelpCircle className="h-4 md:h-8 text-red-400" />
          </div>

          <h2 className="ml-1 md:ml-2 text-sm md:text-lg">
            Váš AI generátor hádanek
          </h2>
        </div>
      </div>
      <div className="mt-5 w-[300px] md:w-[400px] relative  ">
        <MagicBall />
        <SmokeAnimation />
      </div>
    </div>
  )
}
