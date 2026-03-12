"use client"

import { Plus, TrendingDown, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const weeklyData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 52 },
  { day: "Wed", value: 68 },
  { day: "Thu", value: 58 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 63 },
]

const maxScore = 100

export function HealthScoreCard() {
  const currentScore = 62.7

  return (
    <div className="mx-5 rounded-2xl overflow-hidden relative" style={{
      background: 'linear-gradient(145deg, #1a1408 0%, #141416 60%, #0A0A0B 100%)',
      border: '1px solid rgba(245,158,11,0.2)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 60px rgba(245,158,11,0.06)'
    }}>
      {/* Ambient glow blobs */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#FCD34D]/8 blur-2xl pointer-events-none" />

      <div className="relative z-10 p-5">
        {/* Top row: label + trend badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/25 flex items-center justify-center">
              <Activity className="h-3.5 w-3.5 text-[#F59E0B]" />
            </div>
            <span className="text-xs font-semibold text-[#9CA3AF] tracking-wider uppercase">Health Risk Score</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-[#3EB980] bg-[#3EB980]/12 border border-[#3EB980]/20 px-2.5 py-1 rounded-full">
            <TrendingDown className="h-3 w-3" />
            <span>-4.2%</span>
          </div>
        </div>

        {/* Score */}
        <div className="mb-1">
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-white tracking-tighter leading-none" style={{
              textShadow: '0 0 40px rgba(245,158,11,0.2)'
            }}>{currentScore}</span>
            <div className="flex flex-col pb-1">
              <span className="text-base font-bold text-[#F59E0B]">pts</span>
              <span className="text-[10px] text-[#6B7280]">/ 100</span>
            </div>
          </div>
        </div>

        {/* Risk level pill */}
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[#FFB85C]/12 border border-[#FFB85C]/25 text-[#FFB85C] text-xs font-semibold px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFB85C] animate-pulse" />
            Moderate Risk
          </span>
          <span className="text-xs text-[#6B7280]">Follow-up recommended</span>
        </div>

        {/* Weekly chart */}
        <div className="mb-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">This Week</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {weeklyData.map((item, index) => {
              const isActive = index === weeklyData.length - 1
              const barH = Math.round((item.value / maxScore) * 72)
              return (
                <div key={item.day} className="flex flex-col items-center gap-1.5 flex-1">
                  <div className="w-full relative flex items-end" style={{ height: 72 }}>
                    <div
                      className="w-full rounded-md transition-all duration-500"
                      style={{
                        height: barH,
                        background: isActive
                          ? 'linear-gradient(180deg, #F59E0B 0%, #FCD34D 100%)'
                          : 'rgba(245,158,11,0.18)',
                        boxShadow: isActive ? '0 0 12px rgba(245,158,11,0.5)' : 'none'
                      }}
                    />
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-md shadow-[#F59E0B]/60" />
                    )}
                  </div>
                  <span className="text-[9px] text-[#6B7280] font-medium">{item.day}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#242428] to-transparent my-4" />

        {/* CTA */}
        <Button
          className="w-full h-13 rounded-xl font-bold text-sm text-[#0A0A0B] tracking-wide transition-all duration-300 active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
            boxShadow: '0 4px 20px rgba(245,158,11,0.35), 0 1px 0 rgba(255,255,255,0.15) inset'
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Patient Scan
        </Button>
      </div>
    </div>
  )
}
