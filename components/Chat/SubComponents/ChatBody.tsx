"use client"

import { cn } from "@/utils/utils"
import { FC } from "react"

interface ChatBodyProps {
  children: React.ReactNode
  className?: string
}

const ChatBody: FC<ChatBodyProps> = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        ` w-2xl h-4xl relative  bg-white flex flex-col h-[400px] w-[300px] rounded-t-xl  `,
        className
      )}
    >
      {children}
    </div>
  )
}

export default ChatBody
