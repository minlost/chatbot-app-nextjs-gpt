import { OutputItem } from "@/types/chatTypes"
import { create } from "zustand"

interface useStoreModalStoreProps {
  isChatOpen: boolean
  setIsChatOpen: (value: boolean) => void
  output: OutputItem[]
  setOutput: (value: OutputItem[]) => void
  isGameOn: boolean
  setIsGameOn: (value: boolean) => void
  userInput: OutputItem
  setUserInput: (value: OutputItem) => void
  hasError: boolean
  setHasError: (value: boolean) => void
}
export const useStoreModal = create<useStoreModalStoreProps>((set) => ({
  isChatOpen: false,
  setIsChatOpen: (value) => set(() => ({ isChatOpen: value })),
  output: [],
  setOutput: (value) => set(() => ({ output: value })),
  isGameOn: false,
  setIsGameOn: (value) => set(() => ({ isGameOn: value })),
  userInput: {
    role: "user",
    content: "",
    id: "",
  },
  setUserInput: (value) => set(() => ({ userInput: value })),
  hasError: false,
  setHasError: (value) => set(() => ({ hasError: value })),
}))
