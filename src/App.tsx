import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppHeader } from "@/components/layout/app-header"
import { ThemeProvider } from "@/components/theme-provider"

import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex min-h-screen bg-background w-full">
          <AppSidebar />
          <SidebarInset className="bg-muted/30 dark:bg-background h-screen overflow-hidden flex flex-col">
            <AppHeader />
            <div className="flex-1 overflow-y-auto w-full">
              <div className="flex flex-col gap-4 p-4 md:p-8 max-w-6xl mx-auto w-full min-h-full">
                <Outlet />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
