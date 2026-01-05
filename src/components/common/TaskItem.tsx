import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

interface SubTask {
    label: string
    completed?: boolean
}

interface TaskItemProps {
    title: string
    description: string
    priority: "High Priority" | "Medium" | "Low"
    priorityColor?: string
    subtasks: SubTask[]
}

export const TaskItem = ({ title, description, priority, subtasks }: TaskItemProps) => { // Removed priorityColor prop as it wasn't being used dynamically in a clean way without more complex mapping

    // Simple mapping for priority styles based on the design
    const getPriorityStyles = (p: string) => {
        if (p === "High Priority") return "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
        if (p === "Medium") return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400"
        if (p === "Low") return "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
        return ""
    }

    return (
        <Card className="border-0 shadow-sm bg-white dark:bg-card">
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                        <h3 className="font-bold text-base text-foreground">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                    <Badge variant="secondary" className={`font-medium ${getPriorityStyles(priority)}`}>{priority}</Badge>
                </div>

                <div className="space-y-3">
                    {subtasks.map((task, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            {task.completed ? (
                                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-green-500 text-white">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                </div>
                            ) : (
                                <Checkbox id={`task-${title}-${index}`} className="border-muted-foreground/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                            )}

                            {task.completed ? (
                                <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">{task.label}</span>
                            ) : (
                                <label htmlFor={`task-${title}-${index}`} className="text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {task.label}
                                </label>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
