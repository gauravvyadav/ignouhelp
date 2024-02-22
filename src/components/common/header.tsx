import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { Button, buttonVariants } from "@/src/components/ui/button"
import Logo from "@/src/components/common/logo"
import Search from "@/src/components/search/search"
import { HeaderMenu } from "./header-menu"
import ThemeSwitch from "./theme-switch"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 min-h-16 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-[90px] flex-col">
        {/* top header */}
        <div className="flex h-[52px] w-full flex-row items-center justify-between pt-1">
          <div className="flex h-full w-auto items-center">
            <Logo className="fill-primary" />
          </div>
          <div className="flex h-full w-auto items-center gap-2">
            <Button variant={"secondary"} className="hidden h-8">
              2000056235
            </Button>
            <Search />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0"
                )}
              >
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
        {/* bottom header  */}
        <div className="mt-auto h-auto">
          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}
