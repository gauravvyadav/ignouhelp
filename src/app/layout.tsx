import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import "../style/globals.css"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "../provider/theme-provider"
import { Layout } from "../types/types"

export const metadata: Metadata = {
  title: "IGNOU HELP | FOR EVERY IGNOU STUDENT",
  description:
    "IGNOU HELP | ADMIT CARD | ASSIGNMENT | STUDY MATERIAL | RESULT | HALL TICKET | ADMISSION | EXAM DATE SHEET | GRADE CARD | RE-REGISTRATION | RE-ADMISSION | RE-EVALUATION ",
  keywords: [
    "IGNOU HELP",
    "IGNOU ADMIT CARD",
    "IGNOU ASSIGNMENT",
    "IGNOU STUDY MATERIAL",
    "IGNOU RESULT",
    "IGNOU HALL TICKET",
    "IGNOU ADMISSION",
    "IGNOU EXAM DATE SHEET",
    "IGNOU GRADE CARD",
    "IGNOU RE-REGISTRATION",
    "IGNOU RE-ADMISSION",
    "IGNOU RE-EVALUATION",
  ],
}

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
