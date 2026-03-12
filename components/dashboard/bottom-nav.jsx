"use client"

import { Home, Bot, Plus, BookOpen, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Bot, label: "AI", active: false },
  { icon: Plus, label: "Scan", isCenter: true },
  { icon: BookOpen, label: "Resources", active: false },
  { icon: User, label: "Profile", active: false },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 safe-bottom"
      style={{
        background: 'rgba(14,14,15,0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(245,158,11,0.1)',
        boxShadow: '0 -4px 30px rgba(0,0,0,0.6)'
      }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon

          if (item.isCenter) {
            return (
              <button
                key={item.label}
                className="relative -mt-7 flex-none transition-all duration-300 active:scale-90"
                aria-label={item.label}
              >
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                    boxShadow: '0 4px 20px rgba(245,158,11,0.5), 0 1px 0 rgba(255,255,255,0.2) inset'
                  }}
                >
                  <Icon className="h-6 w-6 text-[#0A0A0B]" strokeWidth={2.5} />
                </div>
              </button>
            )
          }

          return (
            <button
              key={item.label}
              className={cn(
                "flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-200 active:scale-95 relative",
                item.active ? "text-[#F59E0B]" : "text-[#4B5563] hover:text-[#9CA3AF]"
              )}
              aria-label={item.label}
            >
              {/* Active dot indicator above icon */}
              {item.active && (
                <span
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #F59E0B, #FCD34D)' }}
                />
              )}
              <Icon
                className="h-5 w-5"
                style={item.active ? {
                  filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.6))'
                } : {}}
              />
              <span className={cn(
                "text-[9px] font-semibold tracking-wide",
                item.active ? "text-[#F59E0B]" : "text-[#4B5563]"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
