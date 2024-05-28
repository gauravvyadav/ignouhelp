import { Fragment } from "react"
import { Metadata } from "next"
import StudyCenters from "@/src/components/regional-network/study-centers"

export const metadata: Metadata = {
  title: "Study Centers",
  description: "Study Centers",
}

export default function StudyCentersPage() {
  return (
    <Fragment>
      <StudyCenters />
    </Fragment>
  )
}
