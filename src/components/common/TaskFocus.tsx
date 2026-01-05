import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export const TaskFocus = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Your Focus</h2>
                <span className="text-sm font-medium text-muted-foreground">Oct 24, 2023</span>
            </div>

            {/* Task Item 1 */}
            <Card className="border-0 shadow-sm bg-white dark:bg-card">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                            <h3 className="font-bold text-base text-foreground">Design System Update</h3>
                            <p className="text-sm text-muted-foreground">Refine the color palette and typography for the new dashboard component library. Ensure accessibility compliance.</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 font-medium">High Priority</Badge>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-green-500 text-white">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">Audit existing colors</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-green-500 text-white">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">Select primary brand hex codes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox id="task1-3" className="border-muted-foreground/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                            <label htmlFor="task1-3" className="text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Create typography scale documentation
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Task Item 2 */}
            <Card className="border-0 shadow-sm bg-white dark:bg-card">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                            <h3 className="font-bold text-base text-foreground">Client Meeting Prep</h3>
                            <p className="text-sm text-muted-foreground">Gather analytics reports and prepare the slide deck for the Q3 review meeting with Acme Corp.</p>
                        </div>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900/40 dark:text-gray-400 font-medium">Medium</Badge>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Checkbox id="task2-1" className="border-muted-foreground/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                            <label htmlFor="task2-1" className="text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Export Google Analytics data
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox id="task2-2" className="border-muted-foreground/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                            <label htmlFor="task2-2" className="text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Draft executive summary slide
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
