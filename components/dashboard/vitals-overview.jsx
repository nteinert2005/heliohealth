"use client"

import { Check, X, AlertCircle } from "lucide-react"

const weeklyCompliance = [
  { day: "M", status: "complete" },
  { day: "T", status: "complete" },
  { day: "W", status: "complete" },
  { day: "T", status: "missed" },
  { day: "F", status: "complete" },
  { day: "S", status: "pending" },
  { day: "S", status: "pending" },
]

const vitalMetrics = [
  { label: "Blood Pressure", value: "128/82", unit: "mmHg", status: "warning" },
  { label: "Protein Level", value: "0.8", unit: "g/dL", status: "normal" },
  { label: "Heart Rate", value: "78", unit: "bpm", status: "normal" },
]

const statusColors = {
  complete: { bg: "bg-[#3EB980]", icon: Check },
  missed: { bg: "bg-[#DC2626]", icon: X },
  pending: { bg: "bg-[#242428]", icon: null },
}

const metricStatusColors = {
  normal: "text-[#3EB980]",
  warning: "text-[#FFB85C]",
  danger: "text-[#DC2626]",
}

export function VitalsOverview() {
  return (
    <div className="px-5 mt-6 mb-28">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Vitals Overview</h2>
        <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>Last updated 2h ago</span>
        </div>
      </div>

      <div className="rounded-xl glass-card p-5 space-y-5">
        {/* Weekly Compliance */}
        <div>
          <p className="text-xs text-[#9CA3AF] mb-3 font-medium">Weekly Compliance</p>
          <div className="flex items-center justify-between">
            {weeklyCompliance.map((item, index) => {
              const status = statusColors[item.status]
              const Icon = status.icon

              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className={`h-9 w-9 rounded-full ${status.bg} flex items-center justify-center ${item.status === 'pending' ? 'border border-[#242428]' : ''}`}>
                    {Icon && <Icon className="h-4 w-4 text-white" />}
                  </div>
                  <span className="text-[10px] text-[#6B7280] font-medium">{item.day}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

        {/* Vital Metrics */}
        <div className="space-y-4">
          {vitalMetrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between">
              <span className="text-sm text-[#9CA3AF]">{metric.label}</span>
              <div className="flex items-baseline gap-1">
                <span className={`text-lg font-semibold ${metricStatusColors[metric.status]}`}>
                  {metric.value}
                </span>
                <span className="text-xs text-[#6B7280]">{metric.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="p-3 rounded-lg bg-[#FFB85C]/10 border border-[#FFB85C]/20">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-[#FFB85C] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-[#FFB85C]">
              Blood pressure slightly elevated. Monitor daily and consider follow-up if persistent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
