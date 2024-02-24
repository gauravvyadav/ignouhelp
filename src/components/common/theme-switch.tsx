"use client"

import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import { Button } from "@/src/components/ui/button"

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
      {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
    </Button>
  )
}
