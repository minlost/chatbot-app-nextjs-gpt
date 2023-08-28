import { chatbotPrompt } from "@/utils/prompt/Hadanky"
import OpenAI from "openai"
import { Message, MessageListSchema } from "@/utils/validators/message"
import { nanoid } from "nanoid"

interface ChatGPTMessage {
  content: string
  role: "user" | "assistant"
}

export async function POST(request: Request) {
  const body = await request.json()
  const { messages } = await body
  console.log(messages)
  try {
    const parsedMessages = MessageListSchema.parse(messages)
    console.log("adasasd")
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const outboundMessages: ChatGPTMessage[] = messages.map(
      (message: Message) => {
        return {
          role: message.role === "user" ? "user" : "assistant",
          content: message.content,
        }
      }
    )

    outboundMessages.unshift({
      role: "assistant",
      content: chatbotPrompt,
    })

    const chatCompletion = await openai.chat.completions.create({
      messages: outboundMessages,
      model: "gpt-3.5-turbo",
      temperature: 0.4,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 150,
      n: 1,
    })

    const output = chatCompletion.choices[0].message

    const formatedOutput = {
      id: nanoid(),
      content: output.content,
      role: output.role,
    }

    return new Response(JSON.stringify(formatedOutput), { status: 200 })
  } catch (e) {
    return new Response("Somethings went wrong", { status: 500 })
  }
}
