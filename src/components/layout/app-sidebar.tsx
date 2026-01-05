import { Link, useLocation } from "react-router-dom"
import { Calendar, CheckSquare, Settings, User, LayoutDashboard } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => {
        if (path === "/" && currentPath === "/") return true;
        if (path !== "/" && currentPath.startsWith(path)) return true;
        return false;
    };

    const getLinkClass = (path: string) => {
        return isActive(path)
            ? "h-10 px-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground font-medium rounded-lg"
            : "h-10 px-3 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent font-medium rounded-lg";
    }

    return (
        <Sidebar className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
            {/* Branding moved to Header */}
            <div className="mt-16"></div>

            <SidebarContent className="px-4 py-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Dashboard" className={getLinkClass("/")}>
                                    <Link to="/">
                                        <LayoutDashboard className="h-5 w-5" />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="My Tasks" className={getLinkClass("/tasks")}>
                                    <Link to="/tasks">
                                        <CheckSquare className="h-5 w-5" />
                                        <span>My Tasks</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Calendar" className={getLinkClass("/calendar")}>
                                    <Link to="#">
                                        <Calendar className="h-5 w-5" />
                                        <span>Calendar</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-6">
                    <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Profile" className={getLinkClass("/profile")}>
                                    <Link to="/profile">
                                        <User className="h-5 w-5" />
                                        <span>Profile</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Preferences" className={getLinkClass("/preferences")}>
                                    <Link to="#">
                                        <Settings className="h-5 w-5" />
                                        <span>Preferences</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
                    <Avatar className="h-10 w-10 border border-sidebar-border">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback className="bg-green-100 text-green-700">AM</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <span className="truncate text-sm font-semibold text-sidebar-foreground">Alex Morgan</span>
                        <span className="truncate text-xs text-muted-foreground">Free Plan</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
