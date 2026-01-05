import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export const CompletionRateCard = () => {
    return (
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
    )
}
