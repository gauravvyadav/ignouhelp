"use client"

import { Fragment } from "react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import { Button } from "@/src/components/ui/button"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <Fragment>
      <Button
        variant="ghost"
        size={"icon"}
        className="h-8 w-8 dark:hidden"
        onClick={() => setTheme("dark")}
      >
        <FiSun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size={"icon"}
        className="hidden h-8 w-8 dark:flex"
        onClick={() => setTheme("light")}
      >
        <FiMoon className="h-4 w-4" />
      </Button>
    </Fragment>
  )
}
