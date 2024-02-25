"use client"

import { Fragment, useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { centerDetails, regionalCenters } from "@/src/data/regional-network"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { GrFormNextLink } from "react-icons/gr"
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
  const router = useRouter()

  // open with cmd+k or ctrl+k or use "/", keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <Fragment>
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
          <span className="text-xs">/</span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <ScrollArea className="max-h-[300px]">
          <CommandList className="max-h-full pb-1 pr-2">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Regional Centers">
              {regionalCenters.map((center) => (
                <CommandItem
                  className="mb-1 cursor-pointer !p-1 !px-2"
                  key={center.code}
                  title={center.title}
                  onSelect={() => {
                    runCommand(() => router.push(center.href as string))
                  }}
                >
                  <div className="flex w-full flex-row">
                    <div className="w-1/4">{center.title}</div>
                    <div className="flex w-3/4 justify-between text-sm text-muted-foreground">
                      <span>RC Code - {center.code}</span>
                      <span>
                        <GrFormNextLink />
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </ScrollArea>
      </CommandDialog>
    </Fragment>
  )
}
