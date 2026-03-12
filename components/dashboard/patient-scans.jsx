"use client"

import { useState } from "react"
import { ChevronRight, FileHeart, Scan, AlertTriangle } from "lucide-react"

const recentScans = [
  {
    id: 1,
    type: "Abdomen Scan",
    patient: "Patient #2847",
    date: "Today, 9:45 AM",
    riskLevel: "low",
    icon: Scan,
  },
  {
    id: 2,
    type: "Blood Pressure Check",
    patient: "Patient #2846",
    date: "Today, 8:30 AM",
    riskLevel: "moderate",
    icon: FileHeart,
  },
  {
    id: 3,
    type: "Protein Analysis",
    patient: "Patient #2845",
    date: "Yesterday, 4:15 PM",
    riskLevel: "high",
    icon: AlertTriangle,
  },
]

const riskConfig = {
  low:      { bg: "bg-[#3EB980]/12", text: "text-[#3EB980]", border: "border-[#3EB980]/20", dot: "#3EB980", label: "Low" },
  moderate: { bg: "bg-[#FFB85C]/12", text: "text-[#FFB85C]", border: "border-[#FFB85C]/20", dot: "#FFB85C", label: "Moderate" },
  high:     { bg: "bg-[#DC2626]/12", text: "text-[#DC2626]", border: "border-[#DC2626]/20", dot: "#DC2626", label: "High" },
}

const filters = ["All", "Today", "At Risk"]

export function PatientScans() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = recentScans.filter((scan) => {
    if (activeFilter === "Today") return scan.date.startsWith("Today")
    if (activeFilter === "At Risk") return scan.riskLevel === "high" || scan.riskLevel === "moderate"
    return true
  })

  return (
    <div className="mt-7">
      {/* Section header */}
      <div className="flex items-center justify-between px-5 mb-3">
        <h2 className="text-base font-bold text-white">Recent Scans</h2>
        <button className="text-xs font-semibold text-[#F59E0B] hover:text-[#FCD34D] transition-colors">
          View All
        </button>
      </div>

      {/* Filter chips */}
      <div className="chips-row px-5 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="flex-none px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95"
            style={activeFilter === f ? {
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              color: '#0A0A0B',
              boxShadow: '0 2px 12px rgba(245,158,11,0.35)'
            } : {
              background: '#141416',
              color: '#9CA3AF',
              border: '1px solid #242428'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Scan list */}
      <div className="space-y-2.5 px-5">
        {filtered.map((scan) => {
          const risk = riskConfig[scan.riskLevel]
          const Icon = scan.icon

          return (
            <button
              key={scan.id}
              className="w-full p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-200 active:scale-[0.98]"
              style={{
                background: '#141416',
                border: '1px solid #242428',
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)'
              }}
            >
              {/* Icon box */}
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center flex-none"
                style={{
                  background: `${risk.dot}18`,
                  border: `1px solid ${risk.dot}30`
                }}
              >
                <Icon className="h-5 w-5" style={{ color: risk.dot }} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-white truncate">{scan.type}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <span>{scan.patient}</span>
                  <span className="h-0.5 w-0.5 rounded-full bg-[#6B7280]" />
                  <span>{scan.date}</span>
                </div>
              </div>

              {/* Risk badge + arrow */}
              <div className="flex items-center gap-2 flex-none">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${risk.bg} ${risk.text} border ${risk.border}`}>
                  {risk.label}
                </span>
                <ChevronRight className="h-4 w-4 text-[#6B7280]" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
