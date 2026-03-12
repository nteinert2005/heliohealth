"use client"

import { Check, X, AlertCircle, Heart, Droplets, Activity } from "lucide-react"

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
  {
    label: "Blood Pressure",
    value: "128/82",
    unit: "mmHg",
    status: "warning",
    icon: Heart,
    color: "#FFB85C",
  },
  {
    label: "Protein Level",
    value: "0.8",
    unit: "g/dL",
    status: "normal",
    icon: Droplets,
    color: "#3EB980",
  },
  {
    label: "Heart Rate",
    value: "78",
    unit: "bpm",
    status: "normal",
    icon: Activity,
    color: "#3EB980",
  },
]

const complianceConfig = {
  complete: { bg: "#3EB980", Icon: Check },
  missed:   { bg: "#DC2626", Icon: X },
  pending:  { bg: "#242428", Icon: null },
}

export function VitalsOverview() {
  return (
    <div className="px-5 mt-7 mb-28">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-white">Vitals Overview</h2>
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3EB980]" />
          <span>Updated 2h ago</span>
        </div>
      </div>

      {/* 2-column metric grid (like Kategorie screen) */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {vitalMetrics.slice(0, 2).map((metric) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.label}
              className="rounded-2xl p-4 flex flex-col gap-3"
              style={{
                background: '#141416',
                border: '1px solid #242428',
                boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
              }}
            >
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center"
                style={{ background: `${metric.color}18`, border: `1px solid ${metric.color}30` }}
              >
                <Icon className="h-4.5 w-4.5" style={{ color: metric.color, height: 18, width: 18 }} />
              </div>
              <div>
                <div className="flex items-baseline gap-1 mb-0.5">
                  <span className="text-xl font-black text-white leading-none">{metric.value}</span>
                  <span className="text-[10px] text-[#6B7280] font-medium">{metric.unit}</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF] font-medium leading-none">{metric.label}</span>
              </div>
              {/* Status bar */}
              <div className="h-1 rounded-full" style={{ background: `${metric.color}30` }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: metric.status === "warning" ? "68%" : "45%",
                    background: metric.color,
                    boxShadow: `0 0 6px ${metric.color}`
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Third metric — full width */}
      {vitalMetrics.slice(2).map((metric) => {
        const Icon = metric.icon
        return (
          <div
            key={metric.label}
            className="rounded-2xl p-4 flex items-center gap-4 mb-4"
            style={{
              background: '#141416',
              border: '1px solid #242428',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
            }}
          >
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center flex-none"
              style={{ background: `${metric.color}18`, border: `1px solid ${metric.color}30` }}
            >
              <Icon className="h-5 w-5" style={{ color: metric.color }} />
            </div>
            <div className="flex-1">
              <span className="text-xs text-[#9CA3AF] font-medium">{metric.label}</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-white leading-none">{metric.value}</span>
                <span className="text-xs text-[#6B7280]">{metric.unit}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{
                color: metric.color,
                background: `${metric.color}18`,
                border: `1px solid ${metric.color}30`
              }}>Normal</span>
              <div className="w-20 h-1 rounded-full" style={{ background: `${metric.color}25` }}>
                <div className="h-full rounded-full w-[45%]" style={{
                  background: metric.color,
                  boxShadow: `0 0 4px ${metric.color}`
                }} />
              </div>
            </div>
          </div>
        )
      })}

      {/* Weekly compliance tracker */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: '#141416',
          border: '1px solid #242428',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Weekly Compliance</span>
          <span className="text-xs text-[#6B7280]">4 / 7 days</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          {weeklyCompliance.map((item, index) => {
            const cfg = complianceConfig[item.status]
            const Icon = cfg.Icon
            return (
              <div key={index} className="flex flex-col items-center gap-1.5 flex-1">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center"
                  style={{
                    background: cfg.bg,
                    border: item.status === 'pending' ? '1px solid #2a2a2e' : 'none',
                    boxShadow: item.status !== 'pending' ? `0 0 8px ${cfg.bg}50` : 'none'
                  }}
                >
                  {Icon && <Icon className="h-3.5 w-3.5 text-white" />}
                </div>
                <span className="text-[9px] text-[#6B7280] font-semibold">{item.day}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Alert */}
      <div
        className="mt-3 p-3.5 rounded-2xl flex items-start gap-2.5"
        style={{
          background: 'rgba(255,184,92,0.06)',
          border: '1px solid rgba(255,184,92,0.2)'
        }}
      >
        <AlertCircle className="h-4 w-4 text-[#FFB85C] mt-0.5 flex-none" />
        <p className="text-xs text-[#FFB85C] leading-relaxed">
          Blood pressure slightly elevated. Monitor daily and consider follow-up if persistent.
        </p>
      </div>
    </div>
  )
}
