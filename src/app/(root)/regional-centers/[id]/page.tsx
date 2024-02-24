import { centerDetails } from "@/src/data/regional-network"

export default function RegionalCenterDetails({
  params,
}: {
  params: { id: string }
}) {
  console.log(centerDetails.length)

  return (
    <div className="w-full bg-blue-200">
      <h1 className="text-3xl font-bold">Regional Center Details</h1>
      <p>
        {centerDetails[params.id]?.districts.map((districts) => (
          <div key={districts}>{districts}</div>
        ))}
      </p>
    </div>
  )
}
