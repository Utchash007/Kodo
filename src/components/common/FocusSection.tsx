import { TaskItem } from "./TaskItem"

export const FocusSection = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">Your Focus</h2>
                <span className="text-sm font-medium text-muted-foreground">Oct 24, 2023</span>
            </div>

            <TaskItem
                title="Design System Update"
                description="Refine the color palette and typography for the new dashboard component library. Ensure accessibility compliance."
                priority="High Priority"
                subtasks={[
                    { label: "Audit existing colors", completed: true },
                    { label: "Select primary brand hex codes", completed: true },
                    { label: "Create typography scale documentation", completed: false }
                ]}
            />

            <TaskItem
                title="Client Meeting Prep"
                description="Gather analytics reports and prepare the slide deck for the Q3 review meeting with Acme Corp."
                priority="Medium"
                subtasks={[
                    { label: "Export Google Analytics data", completed: false },
                    { label: "Draft executive summary slide", completed: false }
                ]}
            />
        </div>
    )
}
