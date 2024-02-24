"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { regionalCenters } from "@/src/data/regional-network"
import { useMobileSidebarState } from "@/src/stores/mobile-sidebar-state"

// main sidebar
export default function Sidebar() {
  const pathname = usePathname()
  const path = pathname.split("/").filter(Boolean)

  if (path[0] === "regional-centers") {
    return <RCSidebar pathname={pathname} />
  }
  return null
}

// regional-centers sidebar
function RCSidebar({ pathname }: { pathname: string }) {
  const setOpen = useMobileSidebarState((s) => s.setIsOpen)

  return (
    <nav>
      <h4 className="mb-2 rounded-md py-1 text-sm font-semibold">
        - Regional Centers
      </h4>
      {regionalCenters.map((rc) => (
        <div key={rc.code} className="pb-4">
          <Link
            onClick={() => setOpen(false)}
            href={rc.href}
            className={`text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline ${
              pathname === rc.href && "font-semibold text-primary"
            }`}
          >
            <span className="px-3">({rc.code})</span>
            {rc.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}
