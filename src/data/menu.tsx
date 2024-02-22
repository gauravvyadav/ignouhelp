// all menu items
import React from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export const menu: {
  heading: string
  items: {
    icon?: React.ReactNode
    title: string
    description: string
    href: string
  }[]
}[] = [
  {
    heading: "Getting Started",
    items: [
      {
        icon: <GitHubLogoIcon />,
        title: "Installation",
        description: "Learn how to install and use the framework",
        href: "/docs/getting-started/installation",
      },
      {
        title: "Usage",
        description: "Learn how to use the framework",
        href: "/docs/getting-started/usage",
      },
      {
        title: "Examples",
        description: "Examples of using the framework",
        href: "/docs/getting-started/examples",
      },
      {
        title: "Examples",
        description: "Examples of using the framework",
        href: "/docs/getting-started/examples",
      },
    ],
  },
  {
    heading: "Components",
    items: [
      {
        title: "Button",
        description: "The Button component",
        href: "/docs/components/button",
      },
      {
        title: "Input",
        description: "The Input component",
        href: "/docs/components/input",
      },
      {
        title: "Select",
        description: "The Select component",
        href: "/docs/components/select",
      },
      {
        title: "Textarea",
        description: "The Textarea component",
        href: "/docs/components/textarea",
      },
    ],
  },
]
