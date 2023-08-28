"use client"

import { cn } from "@/utils/utils"
import { FC, useEffect, useRef } from "react"

interface OutputItem {
  role: string
  content: string
  id: string
}

interface OutputProps {
  output: OutputItem[]
}

const Output: FC<OutputProps> = ({ output }) => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight
    }
  }, [output])

  return (
    <div
      className="overflow-scroll h-[300px] pb-6 flex flex-col gap-4 p-2"
      ref={divRef}
    >
      {output.map((item, index) => (
        <div
          className={cn(
            `flex ${item.role === "user" ? "justify-start" : "justify-end"}`
          )}
          key={index}
        >
          <p
            key={index}
            className={cn(
              `text-gray-900 text-sm sm:leading-6 inline-block px-2 py-2 rounded-lg break-words max-w-full font-semibold ${
                item.role === "user"
                  ? "bg-yellow-200 text-gray-900"
                  : "bg-green-200 text-gray-900"
              }`
            )}
          >
            {item.content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Output
