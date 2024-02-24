"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { topHeaderMenu } from "@/src/data/menu"
import { cn } from "@/src/lib/utils"

export default function TopHeaderNav() {
  const pathname = usePathname()

  return (
    <div className=" ml-4 hidden h-full flex-row items-center gap-2 md:flex">
      {topHeaderMenu.map((menu) => (
        <Link
          key={menu.title}
          href={menu.href}
          className={cn(
            "mr-2 transition-colors hover:text-foreground/80",
            pathname === menu.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  )
}
