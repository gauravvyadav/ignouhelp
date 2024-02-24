import { Metadata } from "next"
import Index from "@/src/app/(root)/index"

export const metadata: Metadata = {
  title: "Home | Ignou Help",
  description: "Ignou help for students.",
  keywords: ["ignou", "help"],
}

export default function Home() {
  return <Index />
}
