import { Metadata } from "next"
import Index from "@/src/app/(root)/index"

export const metadata: Metadata = {
  title: "Home | IGNOU HELP",
  description: "IGNOU HELP",
  keywords: ["IGNOU", "HELP"],
}

export default function Home() {
  return <Index />
}
