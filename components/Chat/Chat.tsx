"use client"
import { useStoreModal } from "@/hooks/useChat"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"
import ChatBody from "./SubComponents/ChatBody"
import Header from "./SubComponents/Header"
import Output from "./SubComponents/Output"
import UserInput from "./SubComponents/UserInput"
import { Message } from "@/utils/validators/message"
import { errorMessage } from "@/utils/errorMessage"

interface OutputItem {
  role: string
  content: string
  id: string
}

const Chat: FC = () => {
  const { isChatOpen, output, setOutput, isGameOn, setIsGameOn, setHasError } =
    useStoreModal()

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (output: Message[]) => {
      if (!isGameOn) {
        setIsGameOn(true)
      }
      const response = axios.post("/api/chat", {
        messages: output,
      })
      return response
    },
    onSuccess: (data) => {
      setOutput([...output, data.data])

      if (data.data.content.includes("!!!Výborně!!!")) {
        setIsGameOn(false)
      }
    },
    onError: (error) => {
      setHasError(true)
      setOutput([...output, errorMessage])
    },
  })
  return (
    <>
      <div className="fixed bottom-0 right-5 rounded-t-xl">
        <ChatBody className={`${!isChatOpen && "h-[40px]"}`}>
          <Header />
          <Output output={output} />
          <UserInput sendMessage={sendMessage} isLoading={isLoading} />
        </ChatBody>
      </div>
    </>
  )
}

export default Chat
