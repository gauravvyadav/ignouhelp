import Link from "next/link"
import { centerDetails } from "@/src/data/regional-network"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip"

export default function RegionalCenterDetails({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="mt-8 w-full max-w-[600px] ">
      <TooltipProvider>
        {" "}
        <h2 className="text-3xl font-semibold capitalize">
          {centerDetails[params.id].rc_name}
        </h2>
        <table className="mt-4 capitalize">
          <tbody>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="text-nowrap pr-4">RC Code:</div>
              </td>
              <td className="flex flex-wrap pb-4">
                <div className="rounded-md bg-secondary p-1 px-2">
                  {centerDetails[params.id].rc_code}
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="pr-4">Address:</div>
              </td>
              <td className="pb-4">
                <div className="rounded-md bg-secondary p-1 px-2">
                  {centerDetails[params.id].address}
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="pr-4">Email:</div>
              </td>
              <td className="flex flex-wrap gap-2 pb-4 lowercase">
                {centerDetails[params.id].email.split(",").map((email) => (
                  <div className="rounded-md bg-secondary p-1 px-2" key={email}>
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="pr-4">Phone:</div>
              </td>
              <td className="flex flex-wrap gap-2 pb-4">
                {centerDetails[params.id].phone.map((no) => (
                  <div className="rounded-md bg-secondary p-1 px-2" key={no}>
                    {no}
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="pr-4">State:</div>
              </td>
              <td className="flex flex-wrap gap-2 pb-4">
                {centerDetails[params.id].state.split(",").map((s) => (
                  <div
                    className="text-nowrap rounded-md bg-secondary p-1 px-2"
                    key={s}
                  >
                    {s}
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="pr-4">
                  Districts:
                  <br /> (Operational Area):
                </div>
              </td>
              <td className="flex flex-wrap gap-2 pb-4">
                {centerDetails[params.id].districts.map((d) => (
                  <div
                    className="text-nowrap rounded-md bg-secondary p-1 px-2"
                    key={d}
                  >
                    {d}
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td className="pr-4 align-baseline font-semibold">
                <div className="text-nowrap pr-4">Website:</div>
              </td>
              <td className="flex flex-wrap pb-4">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="rounded-md bg-secondary p-1 px-2 lowercase">
                      <Link
                        href={centerDetails[params.id].website}
                        target="_blank"
                      >
                        {centerDetails[params.id].website}
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Click to Open</TooltipContent>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </TooltipProvider>
    </div>
  )
}
