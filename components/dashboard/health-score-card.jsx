"use client"

import { Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const weeklyData = [
  { day: "Mon", value: 45, risk: "low" },
  { day: "Tue", value: 52, risk: "low" },
  { day: "Wed", value: 68, risk: "moderate" },
  { day: "Thu", value: 58, risk: "moderate" },
  { day: "Fri", value: 72, risk: "moderate" },
  { day: "Sat", value: 65, risk: "moderate" },
  { day: "Sun", value: 63, risk: "moderate" },
]

export function HealthScoreCard() {
  const currentScore = 62.7
  const maxScore = 100

  return (
    <div className="mx-5 rounded-2xl glass-card p-5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#FCD34D]/15 blur-2xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-sm font-medium text-[#9CA3AF]">Health Risk Score</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#3EB980] bg-[#3EB980]/10 px-2 py-1 rounded-full">
            <TrendingUp className="h-3 w-3" />
            <span>-4.2%</span>
          </div>
        </div>

        {/* Score Display */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-bold text-white tracking-tight">{currentScore}</span>
          <span className="text-xl text-[#9CA3AF] font-medium">pts</span>
        </div>

        <p className="text-sm text-[#9CA3AF] mb-6">
          Moderate risk level detected. Consider scheduling a follow-up assessment.
        </p>

        {/* Weekly Chart */}
        <div className="flex items-end justify-between gap-2 h-24 mb-6">
          {weeklyData.map((item, index) => (
            <div key={item.day} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full relative">
                <div
                  className="w-full rounded-lg transition-all duration-500"
                  style={{
                    height: `${(item.value / maxScore) * 80}px`,
                    background: index === weeklyData.length - 1
                      ? 'linear-gradient(180deg, #F59E0B 0%, #FCD34D 100%)'
                      : 'linear-gradient(180deg, rgba(245, 158, 11, 0.5) 0%, rgba(252, 211, 77, 0.3) 100%)'
                  }}
                />
                {index === weeklyData.length - 1 && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-[#F59E0B]/50" />
                )}
              </div>
              <span className="text-[10px] text-[#6B7280] font-medium">{item.day}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="w-full h-14 rounded-xl gradient-purple text-[#0A0A0B] font-semibold text-base shadow-lg shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 transition-all duration-300 active:scale-[0.98]"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Patient Scan
        </Button>
      </div>
    </div>
  )
}
