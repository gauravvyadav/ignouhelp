import Link from "next/link"
import { centerDetails } from "@/src/data/regional-network"
import { Separator } from "@/src/components/ui/separator"
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
    <div className="mb-10 mt-8 w-full max-w-[600px]">
      <TooltipProvider>
        <h2 className="mb-4 text-center text-3xl font-semibold capitalize sm:text-start">
          {centerDetails[params.id].rc_name}
        </h2>
        <Separator />
        <table className="mt-6 text-sm capitalize sm:text-base">
          <tbody>
            <tr>
              <td className="pr-1 align-baseline font-semibold">
                <div className="text-nowrap pr-1">RC Code:</div>
              </td>
              <td className="flex flex-wrap pb-4">
                <div className="rounded-md bg-secondary p-1 px-2">
                  {centerDetails[params.id].rc_code}
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr-1 align-baseline font-semibold">
                <div className="pr-1">Address:</div>
              </td>
              <td className="pb-4">
                <div className="rounded-md bg-secondary p-1 px-2">
                  {centerDetails[params.id].address}
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr-1 align-baseline font-semibold">
                <div className="pr-1">Email:</div>
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
              <td className="pr-1 align-baseline font-semibold">
                <div className="pr-1">Phone:</div>
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
              <td className="pr-1 align-baseline font-semibold">
                <div className="pr-1">State:</div>
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
              <td className="pr-1 align-baseline font-semibold">
                <div className="pr-1">
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
              <td className="pr-1 align-baseline font-semibold">
                <div className="text-nowrap pr-1">Website:</div>
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
