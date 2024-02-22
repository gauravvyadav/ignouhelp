"use client"

import * as React from "react"
import Link from "next/link"
import { menu } from "@/src/data/menu"
import { cn } from "@/src/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu"

export function HeaderMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3">
        {menu.map((section) => (
          <NavigationMenuItem key={section.heading}>
            <NavigationMenuTrigger className="px-0">
              {section.heading}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="shadow-2xl">
              <ul className="grid w-[320px] gap-3 p-2 md:w-[360px] md:grid-cols-2 lg:w-[400px] ">
                {section.items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({
  className,
  icon,
  title,
  children,
  ...props
}: {
  className?: string
  icon?: React.ReactNode
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="flex flex-row items-center text-sm font-medium leading-none">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="mt-[1px]">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = "ListItem"
