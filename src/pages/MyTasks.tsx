import { TaskCard } from "@/components/tasks/TaskCard"
import { ScrollArea } from "@/components/ui/scroll-area"

export const MyTasks = () => {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            {/* 
                Header is handled by AppHeader being dynamic. 
                This container will fill the remaining height and scroll internally.
            */}
            <ScrollArea className="flex-1 pr-4 pl-24">
                <div className="space-y-6 pb-8">
                    <TaskCard
                        title="Website Redesign Project"
                        description="Update the main landing page with new branding guidelines and color scheme."
                        priority="High"
                        subtasks={[
                            { id: "t1", text: "Review current analytics", completed: true },
                            { id: "t2", text: "Draft initial wireframes", completed: true },
                            { id: "t3", text: "Finalize color palette", completed: false },
                        ]}
                    />

                    <TaskCard
                        title="Q3 Marketing Report"
                        description="Compile social media performance data and creating slide deck for the quarterly review meeting."
                        priority="Medium"
                        subtasks={[
                            { id: "t4", text: "Export data from LinkedIn", completed: false },
                            { id: "t5", text: "Create presentation slides", completed: false },
                        ]}
                    />

                    <TaskCard
                        title="Client Onboarding - TechFlow"
                        description="Setup environments and invite team members to the new organization workspace."
                        priority="Normal"
                        subtasks={[
                            { id: "t6", text: "Send invitation email", completed: true },
                        ]}
                    />
                </div>
            </ScrollArea>
        </div>
    )
}
