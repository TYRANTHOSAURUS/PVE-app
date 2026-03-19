"use client"

import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { HeroPlaceholder } from "@/components/hero-placeholder"
import { Changelog } from "@/components/changelog"
import { type ChangelogEntry } from "@/lib/types"

export default function DashboardPage() {
  const [view, setView] = useState<"home" | "changelog">("home")
  const [entries, setEntries] = useState<ChangelogEntry[] | null>(null)

  useEffect(() => {
    fetch("/changelog.json")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setEntries([]))
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setView(window.location.hash === "#changelog" ? "changelog" : "home")
    }
    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {view === "changelog" ? "Changelog" : "PVE"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {view === "changelog" ? (
            <Changelog entries={entries ?? []} loading={entries === null} />
          ) : (
            <HeroPlaceholder />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
