"use client"

import { Button } from "@/components/ui/Buttom"
import { useStoreModal } from "@/hooks/useChat"
import { Loader } from "lucide-react"
import { nanoid } from "nanoid"
import { FC } from "react"
import TextareaAutosize from "react-textarea-autosize"

interface OutputItem {
  role: string
  content: string
  id: string
}

interface UserInputProps {
  sendMessage: (output: OutputItem[]) => void
  isLoading: boolean
}

const UserInput: FC<UserInputProps> = ({ sendMessage, isLoading }) => {
  const {
    isChatOpen,
    output,
    setOutput,
    isGameOn,
    userInput,
    setUserInput,
    hasError,
  } = useStoreModal()

  const handleSend = () => {
    let newOutput = [...output]

    if (!isGameOn) {
      newOutput = []
    }
    if (userInput.content.trim() === "" && isGameOn) return
    const newId = nanoid()
    const cleanedContent = userInput.content.replace(/\n$/, "")
    const newItem = {
      ...userInput,
      id: newId,
      content: isGameOn ? cleanedContent : "Začni",
    }
    setOutput([...newOutput, newItem])
    setUserInput({ ...userInput, content: "" })
    sendMessage(newOutput.concat(newItem))
  }

  return (
    <>
      {isChatOpen ? (
        <div className="bg-slate-100 absolute bottom-0 w-full">
          {isGameOn ? (
            <TextareaAutosize
              value={userInput.content}
              onChange={(e) =>
                setUserInput({ ...userInput, content: e.target.value })
              }
              onKeyDown={(e) => {
                if (isLoading) return
                if (e.key === "Enter" && !e.shiftKey) {
                  handleSend()
                }
              }}
              minRows={2}
              rows={2}
              maxRows={2}
              placeholder="Váš zpráva..."
              disabled={isLoading || hasError}
              className="h-[60px] peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6 pl-1 focus:outline-none"
            />
          ) : (
            <div className="w-full flex justify-center items-center h-[60px] ">
              <Button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-green px-3 py-1 text-white font-semibold  rounded-xl shadow-2xl text-xl hover:bg-opacity-70 ease-in-out duration-300 active:scale-105 border bg-[#7e1212] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Nová hra {isLoading && <Loader className="animate-spin" />}
              </Button>
            </div>
          )}
        </div>
      ) : null}
    </>
  )
}

export default UserInput
