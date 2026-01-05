import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame } from "lucide-react"

export const StreakCard = () => {
    return (
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
    )
}
