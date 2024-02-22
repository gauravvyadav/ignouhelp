"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size={"icon"}
      className="h-8 w-8"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </Button>
  )
}
