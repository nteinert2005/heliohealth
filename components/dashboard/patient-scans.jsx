"use client"

import { ChevronRight, FileHeart, Scan } from "lucide-react"

const recentScans = [
  {
    id: 1,
    type: "Abdomen Scan",
    patient: "Patient #2847",
    date: "Today, 9:45 AM",
    status: "completed",
    riskLevel: "low",
    icon: Scan,
  },
  {
    id: 2,
    type: "Blood Pressure Check",
    patient: "Patient #2846",
    date: "Today, 8:30 AM",
    status: "review",
    riskLevel: "moderate",
    icon: FileHeart,
  },
  {
    id: 3,
    type: "Protein Analysis",
    patient: "Patient #2845",
    date: "Yesterday, 4:15 PM",
    status: "completed",
    riskLevel: "high",
    icon: Scan,
  },
]

const riskColors = {
  low: { bg: "bg-[#3EB980]/15", text: "text-[#3EB980]", dot: "bg-[#3EB980]" },
  moderate: { bg: "bg-[#FFB85C]/15", text: "text-[#FFB85C]", dot: "bg-[#FFB85C]" },
  high: { bg: "bg-[#DC2626]/15", text: "text-[#DC2626]", dot: "bg-[#DC2626]" },
}

export function PatientScans() {
  return (
    <div className="px-5 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Recent Scans</h2>
        <button className="text-sm text-[#F59E0B] font-medium hover:text-[#FCD34D] transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {recentScans.map((scan) => {
          const risk = riskColors[scan.riskLevel]
          const Icon = scan.icon

          return (
            <button
              key={scan.id}
              className="w-full p-4 rounded-xl glass-card flex items-center gap-4 hover:bg-[var(--neon-purple)]/10 transition-all duration-300 active:scale-[0.98] text-left"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#F59E0B]/20 to-[#FCD34D]/20 flex items-center justify-center border border-[var(--glass-border)]">
                <Icon className="h-6 w-6 text-[#FCD34D]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-white truncate">{scan.type}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${risk.bg} ${risk.text}`}>
                    {scan.riskLevel}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <span>{scan.patient}</span>
                  <span className="h-1 w-1 rounded-full bg-[#6B7280]" />
                  <span>{scan.date}</span>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-[#6B7280] flex-shrink-0" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
