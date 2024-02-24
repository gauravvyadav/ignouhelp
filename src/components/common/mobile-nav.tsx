"use client"

import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { topHeaderMenu } from "@/src/data/menu"
import { useMobileSidebarState } from "@/src/stores/mobile-sidebar-state"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { cn } from "@/src/lib/utils"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Logo from "./logo"
import Sidebar from "./sidebar"

export function MobileNav() {
  const isOpen = useMobileSidebarState((s) => s.isOpen)
  const setOpen = useMobileSidebarState((s) => s.setIsOpen)

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pr-0">
        <MobileLink href="/" className="" onOpenChange={setOpen}>
          <Logo className="fill-primary" />
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-4rem)] pb-2 pl-6">
          <div className="flex flex-col space-y-3">
            {topHeaderMenu.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
          <div className="mt-4 flex flex-col">
            <Sidebar />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
