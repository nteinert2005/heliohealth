import { Header } from "@/components/dashboard/header"
import { HealthScoreCard } from "@/components/dashboard/health-score-card"
import { PatientScans } from "@/components/dashboard/patient-scans"
import { VitalsOverview } from "@/components/dashboard/vitals-overview"
import { BottomNav } from "@/components/dashboard/bottom-nav"

export default function HealthDashboard() {
  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B4DFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto">
        <Header />

        <main className="pb-4">
          <HealthScoreCard />
          <PatientScans />
          <VitalsOverview />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
