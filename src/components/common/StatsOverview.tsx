import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, BarChart3, PieChart } from "lucide-react"

export const StatsOverview = () => {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Streak Card */}
            <Card className="border-0 shadow-sm bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
                    <Flame className="h-5 w-5 text-orange-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">12 Days</div>
                    <p className="text-xs text-muted-foreground mt-1">You're on fire! Keep it up.</p>
                </CardContent>
            </Card>

            {/* Completion Rate Card */}
            <Card className="border-0 shadow-sm bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
                    <BarChart3 className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">85%</div>
                    <p className="text-xs text-muted-foreground mt-1 mb-3">+5% from last week</p>
                    <Progress value={85} className="h-2 bg-green-100 dark:bg-green-900/20 [&>div]:bg-green-500" />
                </CardContent>
            </Card>

            {/* Today's Progress Card */}
            <Card className="border-0 shadow-sm bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Today's Progress</CardTitle>
                    <PieChart className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">6/8</div>
                    <p className="text-xs text-muted-foreground mt-1 mb-3">Tasks completed today</p>
                    <Progress value={75} className="h-2 bg-green-100 dark:bg-green-900/20 [&>div]:bg-green-300" />
                </CardContent>
            </Card>
        </div>
    )
}
