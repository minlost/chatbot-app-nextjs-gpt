"use client"

import { Button } from "@/components/ui/Buttom"
import { useStoreModal } from "@/hooks/useChat"
import { ArrowDownRightSquare, ArrowUpRightSquare } from "lucide-react"

const Header = () => {
  const { isChatOpen, setIsChatOpen } = useStoreModal()

  return (
    <div
      className="bg-[#7e1212] w-full h-[40px] rounded-t-lg   p-2  flex justify-between z-10 cursor-pointer "
      onClick={() => setIsChatOpen(!isChatOpen)}
    >
      <div className="flex items-center gap-2">
        <div className="bg-green-500 h-2 w-2 rounded-full  " />
        <p className="text-white font-bold"> AI Chat-Hádankovač</p>
      </div>
      <Button>
        {isChatOpen ? (
          <ArrowUpRightSquare className="text-white hover:text-slate-300 ease-in-out duration-300" />
        ) : (
          <ArrowDownRightSquare className="text-white hover:text-slate-300 ease-in-out duration-300" />
        )}
      </Button>
    </div>
  )
}

export default Header
