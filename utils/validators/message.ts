import * as z from "zod"

export const MessageSchema = z.object({
  id: z.string(),
  content: z.string(),
  role: z.string(),
})
export const MessageListSchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>
