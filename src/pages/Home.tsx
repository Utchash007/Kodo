import { StreakCard } from "@/components/common/StreakCard"
import { CompletionRateCard } from "@/components/common/CompletionRateCard"
import { TodaysProgressCard } from "@/components/common/TodaysProgressCard"
import { FocusSection } from "@/components/common/FocusSection"

export const Home = () => {
    return (
        <div className="space-y-8 p-1 pl-24">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <StreakCard />
                <CompletionRateCard />
                <TodaysProgressCard />
            </div>

            {/* Your Focus Section */}
            <FocusSection />
        </div>
    )
}
