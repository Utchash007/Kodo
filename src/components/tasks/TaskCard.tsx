import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit2, Trash2 } from "lucide-react"

interface Subtask {
    id: string;
    text: string;
    completed: boolean;
}

interface TaskCardProps {
    title: string;
    description: string;
    priority: "High" | "Medium" | "Normal";
    subtasks: Subtask[];
}

export function TaskCard({ title, description, priority, subtasks }: TaskCardProps) {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400";
            case "Medium":
                return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "Normal":
                return "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400";
            default:
                return "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900/40 dark:text-gray-400";
        }
    }

    const completedSubtasks = subtasks.filter(t => t.completed).length;

    return (
        <Card className="border shadow-sm mb-4">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
                    <Badge variant="secondary" className={`font-medium ${getPriorityColor(priority)}`}>
                        {priority} Priority
                    </Badge>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{description}</p>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        SUBTASKS ({completedSubtasks}/{subtasks.length})
                    </h4>
                    <div className="space-y-2">
                        {subtasks.map((task) => (
                            <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border bg-card shadow-sm dark:bg-muted/40 dark:shadow-none hover:bg-accent/50 transition-colors">
                                <Checkbox id={task.id} checked={task.completed} className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                                <label
                                    htmlFor={task.id}
                                    className={`text-sm font-medium leading-none flex-1 cursor-pointer ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                                >
                                    {task.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    {/* Edit Button: Light yellow default, darkens on hover */}
                    <Button
                        size="sm"
                        variant="ghost"
                        className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-200/50"
                    >
                        <Edit2 className="h-3.5 w-3.5 mr-1" /> Edit
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200/50"
                    >
                        <Trash2 className="h-3.5 w-3.5 mr-1" /> Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
