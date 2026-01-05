import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export const TodaysProgressCard = () => {
    return (
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
    )
}
