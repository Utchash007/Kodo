import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Plus, CheckSquare } from "lucide-react"
import { useLocation } from "react-router-dom"

export function AppHeader() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/profile":
                return "Profile Settings";
            case "/tasks":
                return "My Tasks";
            case "/":
                return "Today's Overview";
            default:
                return "AiJournal";
        }
    }

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full z-10 transition-all">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground md:ml-2 border-r pr-4 mr-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
                        <CheckSquare className="size-5" />
                    </div>
                    AiJournal
                </div>
                <h1 className="text-xl font-bold tracking-tight text-foreground hidden md:block">{getTitle()}</h1>
            </div>

            <div className="flex items-center gap-3">
                <ModeToggle />
                <Button variant="outline" size="icon" className="rounded-full border-0 bg-secondary/50 shadow-sm hover:bg-secondary">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white font-medium shadow-md shadow-green-500/20 px-6">
                    <Plus className="mr-2 h-4 w-4" /> New Task
                </Button>
            </div>
        </header>
    )
}
