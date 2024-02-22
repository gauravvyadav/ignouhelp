import { Layout } from "@/src/types/types"
import AppLayout from "@/src/components/common/app-layout"

export default function AppRootLayout({ children }: Layout) {
  return <AppLayout>{children}</AppLayout>
}
