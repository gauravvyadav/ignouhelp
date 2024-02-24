import { Fragment } from "react"
import { Metadata } from "next"
import RegionalCenters from "@/src/components/regional-network/regional-centers"

export const metadata: Metadata = {
  title: "Regional Centers",
  description: "Regional Centers",
}

export default function RegionalCentersPage() {
  return (
    <Fragment>
      <RegionalCenters />
    </Fragment>
  )
}
