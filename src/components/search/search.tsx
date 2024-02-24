"use client"

import { useEffect, useState } from "react"
import {
  CalendarIcon,
  FaceIcon,
  MagnifyingGlassIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { cn } from "@/src/lib/utils"
import { Button } from "@/src/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/components/ui/command"
import { ScrollArea } from "@/src/components/ui/scroll-area"

export default function Search() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-8 justify-center rounded-[0.5rem] border-0 bg-background p-0 text-sm font-normal text-muted-foreground shadow-none sm:w-40 sm:justify-start sm:border sm:p-3 sm:pr-12 lg:w-64"
        )}
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="h-4 w-4 sm:mr-2" />
        <span className="hidden lg:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <ScrollArea className="max-h-[300px]">
          <CommandList className="max-h-full pb-1 pr-2">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </ScrollArea>
      </CommandDialog>
    </>
  )
}
