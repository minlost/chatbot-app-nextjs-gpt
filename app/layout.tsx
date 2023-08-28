import Chat from "@/components/Chat/Chat"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/utils/utils"
import Providers from "@/providers/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Open Ai Mystery Chat",
  description: "An Example of ai bot prepared for custom chatbot",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            "bg-black min-h-screen flex flex-col pt-20 items-center",
            inter.className
          )}
        >
          {children}
          <Chat />
        </body>
      </Providers>
    </html>
  )
}
