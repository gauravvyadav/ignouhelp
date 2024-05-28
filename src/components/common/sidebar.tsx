"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { regionalCenters, studyCenters } from "@/src/data/regional-network"
import { useMobileSidebarState } from "@/src/stores/mobile-sidebar-state"
import { FaBookReader, FaUniversity } from "react-icons/fa"

// main sidebar
export default function Sidebar() {
  const pathname = usePathname()
  const path = pathname.split("/").filter(Boolean)

  if (path[0] === "regional-centers") {
    return <RCSidebar pathname={pathname} />
  }
  if (path[0] === "study-centers") {
    return <SCSidebar pathname={pathname} />
  }
  return null
}

// regional centers sidebar
function RCSidebar({ pathname }: { pathname: string }) {
  const setOpen = useMobileSidebarState((s) => s.setIsOpen)

  return (
    <nav>
      <h4 className="mb-2 flex items-center gap-2 rounded-md py-1 text-sm font-semibold">
        <FaUniversity />
        Regional Centers
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
            <span className="pr-3">({rc.code})</span>
            {rc.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

// study centers sidebar

function SCSidebar({ pathname }: { pathname: string }) {
  const setOpen = useMobileSidebarState((s) => s.setIsOpen)

  return (
    <nav>
      <h4 className="mb-2 flex items-center gap-2 rounded-md py-1 text-sm font-semibold">
        <FaBookReader />
        Study Centers
      </h4>
      {Object.entries(studyCenters).map(([key, value]) => (
        <div key={key} className="pb-4">
          <Link
            onClick={() => setOpen(false)}
            href={`/study-centers/${key}`}
            className={`text-sm capitalize text-muted-foreground underline-offset-2 hover:text-primary hover:underline ${
              pathname === `/study-centers/${key}` &&
              "font-semibold  text-primary"
            }`}
          >
            {key}
          </Link>
        </div>
      ))}
    </nav>
  )
}
