import { Fragment } from "react"
import { Layout } from "@/src/types/types"
import Footer from "@/src/components/common/footer"
import Header from "@/src/components/common/header"
import Sidebar from "@/src/components/common/sidebar"
import { ScrollArea } from "../ui/scroll-area"

export default function AppLayout({ children }: Layout) {
  return (
    <Fragment>
      <Header />

      <main className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-96px)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <Sidebar />
          </ScrollArea>
        </aside>
        {children}
      </main>

      {/* <Footer /> */}
    </Fragment>
  )
}
