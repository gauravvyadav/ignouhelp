// all menu items
import { FaBookReader, FaUniversity } from "react-icons/fa"

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
    heading: "Regional Network",
    items: [
      {
        icon: <FaUniversity />,
        title: "Regional Centers",
        description: "Regional centers of ignou with address",
        href: "/regional-centers",
      },
      {
        icon: <FaBookReader />,
        title: "Study Centers",
        description: "Study centers of ignou with address",
        href: "/study-centers",
      },
    ],
  },
]

export const topHeaderMenu: {
  title: string
  href: string
}[] = [
  {
    title: "Home",
    href: "/",
  },
]
